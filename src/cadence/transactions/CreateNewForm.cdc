import FlowForm from 0xFlowForm
import MetadataViews from 0xMetadataViews
import NonFungibleToken from 0xNonFungibleToken

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