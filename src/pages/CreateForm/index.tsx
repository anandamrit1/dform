import { IconButton, Tooltip } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Description, Palette, Publish, Share, Visibility } from "@mui/icons-material";
import { atom, useRecoilState } from "recoil";
import { useCallback, useEffect, useState } from "react";
import DashboardTabs from "./DashboardTabs";
import { useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../../utils/axios";
import { Form, FormField } from "../../types/Form";
import { AxiosInstance } from "axios";
import { omit } from 'lodash';
import { debounce } from "../../utils/debounce";
import ShareFormModal from "../../components/ShareFormModal";
import ThemeModal from "../../components/ThemeModal";
import { publishFlowForm } from "../../flow/transactions";
import * as fcl from "@onflow/fcl";

export type AdminFormType = Form & {
    feilds?: FormField[],
    response?: {
        id: string,
        data: Record<string, string>
    }[]
}

export const adminFormAtom = atom<AdminFormType | undefined>({
    key: 'adminFormAtom',
    default: undefined
})

const updateFormHandler = async (form: AdminFormType, apiClient: AxiosInstance) => {
    const formWithoutFields: Form = {
        id: form.id,
        backgroundColor: form?.backgroundColor,
        backgroundUrl: form?.backgroundUrl,
        description: form?.description,
        isCaptchaEnabled: false,
        isEmailCopyOfResponseEnabled: false,
        isPublished: form?.isPublished ?? false,
        metadata: form?.metadata ?? {}
    }

    const updatedFields = form?.feilds!.map((f) => {
        const p = omit(f.properties, ['formFeildId', 'formId'])
        const fr = omit(f, 'formId')

        return {
            ...fr,
            properties: p
        }
    });

    const res = await apiClient.post("/form/update", {
        id: form.id,
        form: formWithoutFields,
        feilds: updatedFields
    })

    const data = await res.data;
    console.log(data)
}

function CreateForm() {
    const [form, setForm] = useRecoilState(adminFormAtom);
    const [showThemeSidebar, setShowThemeSidebar] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);

    const navigate = useNavigate()
    const apiClient = useAxios();

    const { formId } = useParams();

    useEffect(() => {
        const getFormDetails = async() => {
            const res = await apiClient.get(`form/get/${formId}`);
            const data = await res.data;
            console.log(data)
            setForm(data)
        }
        getFormDetails()
    }, [formId])

    const delaySaveToDb = useCallback(debounce((form) => {
        updateFormHandler(form, apiClient)
    }, 2000), [apiClient]);

    useEffect(() => {
        if (form) {
            delaySaveToDb(form)
        }
    }, [form])

    const handlePublishForm = async () => {
        if (form) {
            const txId = await publishFlowForm({
            formId: form?.id!,
            name: form?.description!,
            description: form?.description!,
            data: "",
            image: form?.backgroundUrl?.replaceAll("https://ipfs.io/ipfs/", "")!
        })
        console.log(txId)
        fcl.tx(txId).subscribe((res: any) => {
            console.log(res)
            if (res?.statusString === "SEALED") {
                setForm((prev) => ({
                    ...prev!,
                    isPublished: true
                }))
                setTimeout(() => navigate('/dashboard'), 3000)
            } else if (res?.statusString === "EXECUTED") {
                console.log('Transaction executed')
            } else if (res?.statusString === "PENDING") {
                console.log('Transaction pending')
            } else if (res?.statusString === "EXPIRED") {
                console.error('Transaction expired')
            }
        })
        }
    }

    return (
        <>
        <div className=" h-screen flex flex-col items-center">
            <div className="border-b-2 shadow-[0_4px_24px_rgba(0,0,0,0.1)] w-screen bg-white py-10 flex justify-between">
                <div className="flex gap-6 px-8">
                    <Tooltip title="Add a question" placement="top">
                        <IconButton
                            size="medium"
                            aria-label="back"
                            onClick={() => navigate('/dashboard')}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Tooltip>
                    <div className="box-border px-2 py-2">
                        {form?.description ?? "Untitled Form.."}
                    </div>
                </div>
                <div className="flex gap-4 px-8">
                    <IconButton
                        size="medium"
                        aria-label="back"
                        onClick={() => setShowThemeSidebar(!showThemeSidebar)}
                    >
                        <Palette />
                    </IconButton>
                    <IconButton
                        size="medium"
                        aria-label="back"
                        onClick={() => window.open(`https://flowforms.up.railway.app/form/${window.location.pathname.split('/')[2]}`)}
                    >
                        <Visibility />
                    </IconButton>
                    <IconButton
                        size="medium"
                        aria-label="back"
                        onClick={() => setShowShareModal(true)}
                    >
                        <Share />
                    </IconButton>
                    <button onClick={handlePublishForm} className={`bg-${form?.backgroundColor}-600 text-white flex items-center gap-2 p-2.5 rounded-xl font-bold px-6 transition duration-200 border-2 hover:border-${form?.backgroundColor}-600 border-white `}>
                        Publish NFT
                    </button>
                </div>
            </div>
            <div className="flex-grow flex overflow-y-auto w-screen pb-24">
                <DashboardTabs />
            </div>
            
        </div>
        {showShareModal && (
                <div>
                    <div
                        onClick={() => setShowShareModal(false)}
                        className="absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"
                    ></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ShareFormModal
                            url={`https://taleflow.vercel.app/form/${window.location.pathname.split('/')[2]}`}
                            onClose={() => setShowShareModal(false)}
                        />
                    </div>
                </div>
            )}
            
        {showThemeSidebar && (
                <div>
                    <div
                        onClick={() => setShowThemeSidebar(false)}
                        className="absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"
                    ></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ThemeModal onClose={() => setShowThemeSidebar(false)} />
                    </div>
                </div>
            )}
        </>
    )
}

export default CreateForm