// import { useState } from 'react';
import logo3 from '../../Images/logo3.webp'
import ViewQuestion from './ViewQuestion';
import { RiSendPlane2Line } from 'react-icons/ri';
// import { Form } from '../../types/Form';

const index = () => {

    const arr = [
        {
            "title": "What is your name?",
            "description": "Please enter your full name",
            "type": "shortAnswer",
            "required": true,
            "properties": {
                "placeholder": "Your Answer"
            },
            "formFieldId": "121"
        },
        {
            "title": "What do you study?",
            "description": "Please add details about your course",
            "type": "longAnswer",
            "required": false,
            "properties": {
                "placeholder": "Your Answer"
            },
            "formFieldId": "123"
        },
        {
            "title": "What is your name?",
            "description": "Please enter your full name",
            "type": "singleOption",
            "required": false,
            "properties": {
                "options": ["Option 1", "Option 2", "Option 3", "Other"]
            },
            "formFieldId": "singleOption"
        },
        {
            "title": "What is your name?",
            "description": "Please enter your full name",
            "type": "multipleOption",
            "required": false,
            "properties": {
                "options": ["Option 1", "Option 2", "Option 3", "Other"]
            },
            "formFieldId": "1234"
        },
        {
            "title": "What is your email?",
            "description": "Please enter your email",
            "type": "email",
            "required": false,
            "properties": {
                "placeholder": "Your Email"
            },
            "formFieldId": "12345"
        }
    ];
    const form1 = { thumbnailUrl: logo3, backgroundColor: "", backgroundUrl: null, font: "", questions: arr, title: "Testing Form" };

    return (
        <div className="w-full bg-white flex justify-center items-center">
            <div className="flex flex-col justify-center items-center border shadow-2xl w-full rounded-2xl shadow-indigo-300 p-8 mt-12 max-w-[760px] mb-[150px]">
                <div className="flex flex-col w-full space-y-5 mb-2 ">
                    <div className="flex flex-row w-full justify-start">
                        <img src={form1.thumbnailUrl} alt="logo3" className='h-20 w-20 rounded-full' />
                    </div>
                    <div className="flex flex-row w-full text-3xl font-bold ">
                        {form1.title}
                    </div>
                </div>
                {arr.map((question, index) => (
                    <ViewQuestion key={index} question={question} />
                ))}
                <div className="flex w-full justify-end">
                    <button className="bg-black text-white flex items-center gap-2 p-2.5 rounded-xl font-bold px-6 hover:opacity-80 transition duration-100 my-4 mb-10">
                        Submit
                        <RiSendPlane2Line className="text-white" />
                    </button>
                </div>
                <div>Powered by <span className='font-bold' > deform.cc</span></div>
            </div>
        </div>
    )
}

export default index