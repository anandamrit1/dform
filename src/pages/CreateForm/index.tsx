import { IconButton, Tooltip } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Description, Palette, Share, Visibility } from "@mui/icons-material";
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

export type AdminFormType = Form & {
    feilds?: FormField[]
}

export const adminFormAtom = atom<AdminFormType | undefined>({
    key: 'adminFormAtom',
    default: undefined
})

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
        </>
    )
}

export default CreateForm