// import { useState } from 'react';
import logo3 from '../../Images/logo3.webp'
import ViewQuestion from './ViewQuestion';
import { RiSendPlane2Line } from 'react-icons/ri';
import { Formik, Form as MyForm } from 'formik';
import { useEffect, useState } from 'react';
// import * as fcl from '@onflow/fcl';
import { mockForm, mockQuestions } from '../../utils/constants';
import AccesGate from './AccesGate';
import { QuestionsValidationSchema } from '../../utils/QuestionValidationSchema';
import { Form, FormField } from '../../types/Form';
import { atom, useRecoilState } from "recoil";
import { useAxios } from "../../utils/axios";
import { QuestionsPageSkeleton } from '../CreateForm/QuestionList';

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

// type FormData = {
//     thumbnailUrl: string;
//     backgroundColor: string;
//     backgroundUrl: string | null;
//     font: string;
//     title: string;
//     accessGateNft?: AccessGateNft;
//     accessGateTwitter?: AccessGateTwitter
// };

export type AdminFormType = Form & {
    feilds?: FormField[]
}

const index = () => {
    const [user, setUser] = useState<{ loggedIn: boolean, addr?: string }>({ loggedIn: false })
    const [form, setForm] = useState<AdminFormType | null>(null)
    const [questions, setQuestions] = useState<FormField[] | undefined>([])
    const [verified, setVerified] = useState<verificationStatus>("NOT_CONNECTED")

    // const formId = "form-0b8e10bf-683f-4e33-9b89-d117a1b45300";
    // const searchParams = new URLSearchParams(window.location.search);
    // const formId = searchParams.get('viewform');
    const pathname: string = new URL(window.location.href).pathname;
    const formId: string = pathname.split('/').pop() || '';
    const backgroundColor: string = form && form?.backgroundColor ? form?.backgroundColor : "white"
    const apiClient = useAxios();

    useEffect(() => {
        const getFormDetails = async () => {
            const res = await apiClient.get(`form/get/${formId}`);
            const data = await res.data;
            console.log(data)
            setForm(data)
        }
        getFormDetails()
    }, [formId])

    console.log(user)
    useEffect(() => {
        // if (form?.accessGateNft?.address) {
        //     console.log("NFT")
        //     fcl.currentUser.subscribe(setUser)
        // } else 
        if (form) {
            setUser({ loggedIn: true })
            setVerified("VERIFIED")
        }
    }, [form])

    useEffect(() => {
        if (form && user?.loggedIn) {
            setQuestions(form?.feilds)
        }
    }, [user, form])

    const validationSchema = QuestionsValidationSchema(questions)

    const initialValues: FormValues = questions ? Object.fromEntries(
        questions.map((element) => [element.id, ''])
    ) : {}

    const onSubmit = async (values: FormValues) => {
        const requestBody = {
            formId: formId,
            data: values,
        };
        try {
            const res = await apiClient.post("/response/create", {
                ...requestBody
            })

            // const data = await res.data;
            // console.log(data);

        } catch (e) {
            console.log(e)
        }
    };

    // if (!user.loggedIn || (user.loggedIn && verified != "VERIFIED")) return <AccesGate verified={verified} setVerified={setVerified} user={user} accessGateNft={form.accessGateNft} />

    return (
        <div className="w-full bg-white flex justify-center items-center">
            <div className=" fixed w-[3000px] h-2/3 -top-10 -rotate-12 opacity-30"
                style={{
                    background: `radial-gradient(100% 50% at 50% 50%, ${backgroundColor} 0%, #ffffff 100%)`,
                }}
            ></div>

            <div className={`flex flex-col z-10 bg-white justify-center items-center border shadow-2xl shadow-${backgroundColor}-300 w-full rounded-2xl shadow-indigo-00 p-8 mt-5 sm:mt-12 max-w-[760px] mb-[75px] md:mb-[150px] mx-5 sm:mx-12`}>
                {
                    form && questions ? <><div className="flex flex-col w-full space-y-5 mb-2 ">
                        {/* <div className="flex flex-row w-full justify-start">
                        <img src={form?.thumbnailUrl} alt="logo3" className='h-20 w-20 rounded-full' />
                    </div> */}
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
                                            <RiSendPlane2Line className="text-white" />
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