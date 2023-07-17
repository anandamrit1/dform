import { FormField } from '../../../types/Form'
import {Field, ErrorMessage } from 'formik';



const ViewSingleSelect = ({ question, themeColor }: { question: FormField; themeColor: string }) => {
    const required = question.required;
    const arr = question.properties?.choices?.map(c => c.label);


    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description ?? ""}</div>
            <div className='flex flex-col space-y-5 text-sm w-full' >
                {arr?.map((option: string, index: number) => (
                    <div className='w-full'>
                        <label key={index} className='flex justify-start items-center space-x-2 '>
                            <Field type="radio" name={question.id} value={option} className='h-6 w-6 cursor-pointer' />
                            <div className='cursor-pointer' > {option} </div>
                        </label>
                    </div>
                ))}
            </div>
            <div className="flex justify-start w-full">
                <ErrorMessage name={question.id}>
                    {(msg: string) => (
                        <div className={`text-red-500 text-sm`}>
                            {msg}
                        </div>
                    )}
                </ErrorMessage>
            </div>
        </div>
    )
}

export default ViewSingleSelect