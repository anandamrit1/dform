// import { useState } from 'react';
import logo3 from '../../Images/logo3.webp'
import ViewQuestion from './ViewQuestion';
import { RiSendPlane2Line } from 'react-icons/ri';
// import { Form } from '../../types/Form';
// import { QuestionType } from '../../../types/Form'
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import * as fcl from '@onflow/fcl';
import { QuestionType } from '../../types/Form';
import { mockForm, mockQuestions } from '../../utils/constants';
import AccesGate from './AccesGate';
import { QuestionsValidationSchema } from '../../utils/QuestionValidationSchema';

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

type FormData = {
    thumbnailUrl: string;
    backgroundColor: string;
    backgroundUrl: string | null;
    font: string;
    title: string;
    accessGateNft?: AccessGateNft;
    accessGateTwitter?: AccessGateTwitter
};


const index = () => {
    const [user, setUser] = useState<{ loggedIn: boolean, addr?: string }>({ loggedIn: false })
    const [form, setForm] = useState<FormData | null>(null)
    const [questions, setQuestions] = useState<QuestionType[] | undefined>([])
    const [verified, setVerified] = useState<verificationStatus>("NOT_CONNECTED")

    const searchParams = new URLSearchParams(window.location.search);
    const formId = searchParams.get('viewform');

    useEffect(() => {
        const fetchForm = async () => {
            console.log(formId);
            // const res = await fetch(`https://flowform.free.beeceptor.com/form`, {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });
            // console.log(res)
            // const data = await res.json();
            setForm(mockForm);
        };
        fetchForm();
    }, [formId]);

    console.log(user)
    useEffect(() => {
        if (form?.accessGateNft?.address) {
            console.log("NFT")
            fcl.currentUser.subscribe(setUser)
        } else if (form) {
            setUser({ loggedIn: true })
            setVerified("VERIFIED")
        }
    }, [form])

    useEffect(() => {
        const fetchQuestions = async () => {
            // const res = await fetch(`https://flowform.free.beeceptor.com/questions`, {
            //     method: 'GET',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });
            // const data = await res.json();
            setQuestions(mockQuestions);
        };
        if (form && user?.loggedIn) {
            fetchQuestions();
        }
    }, [user, form])

    const validationSchema = QuestionsValidationSchema(questions)

    const initialValues: FormValues = questions ? Object.fromEntries(
        questions.map((element) => [element.formFieldId, ''])
    ) : {}

    const onSubmit = (values: FormValues) => {
        // Handle form submission here
        console.log(values);
    };

    if (!form) return <>Loading</>
    if (!user.loggedIn || (user.loggedIn && verified != "VERIFIED")) return <AccesGate verified={verified} setVerified={setVerified} user={user} accessGateNft={form.accessGateNft} />

    if (!questions) return <>Loading</>

    return (
        <div className="w-full bg-white flex justify-center items-center">
            <div className=" fixed w-[3000px] h-2/3 -top-10 -rotate-12 opacity-30"
                style={{
                    background: `radial-gradient(100% 50% at 50% 50%, ${form?.backgroundColor} 0%, #ffffff 100%)`,
                }}
            ></div>

            <div className={`flex flex-col z-10 bg-white justify-center items-center border shadow-2xl shadow-${form?.backgroundColor}-300 w-full rounded-2xl shadow-indigo-00 p-8 mt-5 sm:mt-12 max-w-[760px] mb-[75px] md:mb-[150px] mx-5 sm:mx-12`}>
                <div className="flex flex-col w-full space-y-5 mb-2 ">
                    <div className="flex flex-row w-full justify-start">
                        <img src={form?.thumbnailUrl} alt="logo3" className='h-20 w-20 rounded-full' />
                    </div>
                    <div className="flex flex-row w-full text-3xl font-bold ">
                        {form?.title}
                    </div>
                </div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                    {({ isValid, dirty }) => (
                        <Form className='w-full'>
                            {questions.map((question, index) => (
                                <ViewQuestion key={index} question={question} themeColor={form?.backgroundColor ?? "green"} />
                            ))}
                            <div className="flex w-full justify-end">
                                <button type="submit" disabled={!isValid || !dirty} className={`bg-${form?.backgroundColor}-600 text-white flex items-center gap-2 p-2.5 rounded-xl font-bold px-6 ${(!isValid || !dirty) ? "opacity-60" : "opacity-100"} transition duration-100 my-4 mb-10`}>
                                    Submit
                                    <RiSendPlane2Line className="text-white" />
                                </button>
                            </div>
                        </Form>

                    )}
                </Formik>
                <div>Powered by <span className='font-bold' > deform.cc</span></div>
            </div>
        </div>
    )
}

export default index