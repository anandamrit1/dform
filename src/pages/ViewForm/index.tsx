import ViewQuestion from './ViewQuestion';
import { RiSendPlane2Line } from 'react-icons/ri';
import { Formik, Form as MyForm, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import * as fcl from '@onflow/fcl';
import AccesGate from './AccesGate';
import { QuestionsValidationSchema } from '../../utils/QuestionValidationSchema';
import { Form, FormField } from '../../types/Form';
import { useAxios } from "../../utils/axios";
import { QuestionsPageSkeleton } from '../CreateForm/QuestionList';
import { CircularProgress } from '@mui/material';
import ViewSuccessPage from './ViewSuccessPage';
import axios from 'axios';

interface FormValues {
    [key: string]: string;
}

export type verificationStatus = "VERIFIED" | "REJECTED" | "LOADING" | "NOT_CONNECTED"

export type AccessGateNft = {
    address: string;
};

export type AccessGateTwitter = {
    username: string
}

export type AdminFormType = Form & {
    feilds?: FormField[]
}

const index = () => {
    const [user, setUser] = useState<{ loggedIn: boolean, addr?: string }>({ loggedIn: false })
    const [form, setForm] = useState<AdminFormType | null>(null)
    const [verified, setVerified] = useState<verificationStatus>("NOT_CONNECTED")
    const [submitLoading, setSubmitLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)


    const pathname: string = new URL(window.location.href).pathname;
    const formId: string = pathname.split('/').pop() || '';
    const backgroundColor: string = form && form?.backgroundColor ? form?.backgroundColor : "white"
    const questions: FormField[] | undefined = form && user?.loggedIn ? form?.feilds : []
    const imageUrl = form?.backgroundUrl ? form?.backgroundUrl : "https://assets.deform.cc/default/logo5.png"
    const acceptingResponses = form?.metadata && form.metadata["settings"] && form.metadata["settings"]["acceptingResponses"] ? true : false
    const apiClient = useAxios();

    useEffect(() => {
        const getFormDetails = async () => {
            const res = await axios.get(`http://localhost:5000/view-form/${formId}`);
            const data = await res.data;
            console.log(data)
            setForm(data)
        }
        getFormDetails()
    }, [formId])

    console.log(user)
    useEffect(() => {
        const getTwitterUser = async () => {
            const res = await apiClient.get(`/responder-auth/user`);
            const data = await res.data;
            console.log(data)
            if (data) {
                setUser({ loggedIn: true, addr: data.username })
            } else {
                setUser({ loggedIn: false })
            }
        }

        if (form?.metadata && form.metadata["settings"] && (form.metadata["settings"]["accessGateNft"] || form.metadata["settings"]["accessGateContract"] || form.metadata["settings"]["accessGateFind"])) {
            console.log("NFT")
            fcl.currentUser.subscribe(setUser)
        } else if (form?.metadata && form.metadata["settings"] && form.metadata["settings"]["accessGateContract"]) {
            getTwitterUser()
        } else if (form) {
            setUser({ loggedIn: true })
            setVerified("VERIFIED")
        }
    }, [form])

    const validationSchema = QuestionsValidationSchema(questions)

    const initialValues: FormValues = questions ? Object.fromEntries(
        questions.map((element) => [element.id, ''])
    ) : {}

    const onSubmit = async (values: FormValues) => {
        setSubmitLoading(true)
        const requestBody = {
            formId: formId,
            data: values,
        };
        try {
            const res = await axios.post("http://localhost:5000/response/create", {
                ...requestBody
            })

            const data = await res.data;
            if (data) {
                setSubmitted(true)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setSubmitLoading(false)
        }
    };

    if (form && acceptingResponses == true && (!user.loggedIn || (user.loggedIn && verified != "VERIFIED"))) {
        return <AccesGate
            verified={verified}
            setVerified={setVerified}
            user={user}
            imageUrl={imageUrl}
            accessGateTwitter={form?.metadata && form?.metadata["settings"] && form?.metadata["settings"]["accessGateTwitter"]}
            accessGateContract={form?.metadata && form?.metadata["settings"] && form?.metadata["settings"]["accessGateContract"]}
            accessGateFind={form?.metadata && form?.metadata["settings"] && form?.metadata["settings"]["accessGateFind"]}
            accessGateNft={form?.metadata && form?.metadata["settings"] && form?.metadata["settings"]["accessGateNft"]}
        />
    }

    console.log(acceptingResponses)
    return (
        <div className="w-full bg-white flex justify-center items-center">
            <div className=" fixed w-[3000px] h-2/3 -top-10 -rotate-12 opacity-30"
                style={{
                    background: `radial-gradient(100% 50% at 50% 50%, ${backgroundColor} 0%, #ffffff 100%)`,
                }}
            ></div>

            <div className={`flex flex-col z-10 bg-white justify-center items-center border shadow-2xl shadow-${backgroundColor}-300 w-full rounded-2xl shadow-indigo-00 p-8 mt-5 sm:mt-12 max-w-[760px] mb-[75px] md:mb-[150px] mx-5 sm:mx-12`}>
                {
                    form && acceptingResponses == false ? <ViewSuccessPage metadata={{ "success_page": { "msg": "Form is not accepting responses" } }} imageUrl={imageUrl} />
                        : form && submitted ? <ViewSuccessPage metadata={form?.metadata!} imageUrl={imageUrl} /> : form && questions ? <><div className="flex flex-col w-full space-y-5 mb-2 ">
                            <div className="flex flex-row w-full justify-start">
                                <img src={form?.backgroundUrl} alt="logo3" className='h-20 w-20 rounded-full' />
                            </div>
                            <div className="flex flex-row w-full text-3xl font-bold ">
                                {form?.description}
                            </div>
                        </div>
                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                                {({ isValid, dirty }) => (
                                    <MyForm className='w-full'>
                                        {questions.map((question, index) => (
                                            <ViewQuestion key={index} question={question} themeColor={backgroundColor} />
                                        ))}
                                        <div className="flex w-full justify-end">
                                            <button type="submit" disabled={!isValid || !dirty} className={`bg-${form.backgroundColor}-600 text-white flex items-center gap-2 p-2.5 rounded-xl font-bold px-6 ${(!isValid || !dirty) ? "opacity-60" : "opacity-100"} transition duration-200 my-4 mb-10 border-2 hover:border-${form.backgroundColor}-600 border-white `}>
                                                Submit
                                                {submitLoading ? <CircularProgress color='inherit' /> : <RiSendPlane2Line className="text-white" />}
                                            </button>
                                        </div>
                                    </MyForm>
                                )}
                            </Formik></> : <QuestionsPageSkeleton />
                }

                <div>Powered by <span className='font-bold' >flowforms</span></div>
            </div>
        </div>
    )
}

export default index