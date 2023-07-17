import * as fcl from "@onflow/fcl";
import { signer } from "../../utils/authz";
import { magic } from "../../utils/magic";

const AUTHORIZATION_FUNCTION = magic.flow.authorization;

export type publishFlowFormArgs = {
  name: string;
  description: string;
  image: string;
  formId: string;
  data: string;
};

const CreateNewForm = 
`
import FlowForm from 0xf512900e47f7d9bb
import MetadataViews from 0x631e88ae7f1d7c20
import NonFungibleToken from 0x631e88ae7f1d7c20

transaction (name: String, description: String, image: String, formId: String, data: String) {
    prepare(acct: AuthAccount, admin: AuthAccount) {
        let minterRef = admin.borrow<&FlowForm.NFTMinter>(from: FlowForm.MinterStoragePath) ?? panic("No Minter in admin's account!")
        if acct.borrow<&FlowForm.Collection>(from: FlowForm.CollectionStoragePath) == nil {
            acct.save(<-FlowForm.createEmptyCollection(), to: FlowForm.CollectionStoragePath)
        }

        if !acct.getCapability<&FlowForm.Collection{NonFungibleToken.CollectionPublic, FlowForm.CollectionPublic, MetadataViews.ResolverCollection}>(FlowForm.CollectionPublicPath).check() {
            acct.unlink(FlowForm.CollectionPublicPath)
            acct.link<&FlowForm.Collection{NonFungibleToken.CollectionPublic, FlowForm.CollectionPublic, MetadataViews.ResolverCollection}>(FlowForm.CollectionPublicPath, target: FlowForm.CollectionStoragePath)
        }

        let collectionRef = acct.getCapability<&{NonFungibleToken.CollectionPublic}>(FlowForm.CollectionPublicPath).borrow()

        if collectionRef == nil {
            panic("Could not borrow capability from public collection at specified path")
        }

        minterRef.mintNFT(
            recipient: collectionRef!,
            id: 0,
            name: name, 
            description: description, 
            image: image, 
            formId: formId, 
            data: data
        )
    }
}
`

export const publishFlowForm = async ({name, image, formId, data, description}: publishFlowFormArgs) => {
    const transactionId = await fcl.mutate({
        cadence: CreateNewForm,
        limit: 9999,
        payer: signer,
        proposer: signer,
        args: (arg, t) => [
            arg(name, t.String),
            arg(description, t.String),
            arg(image, t.String),
            arg(formId, t.String),
            arg(data, t.String),
        ],
        authorizations: [AUTHORIZATION_FUNCTION, signer],
    })
    return transactionId
};
