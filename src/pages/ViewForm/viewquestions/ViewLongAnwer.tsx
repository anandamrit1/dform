import { FormField } from '../../../types/Form'
import {  Field, ErrorMessage } from 'formik';

// interface FormValues {
//     [key: string]: any;
// }

const ViewLongAnwer = ({ question, themeColor }: { question: FormField; themeColor: string }) => {
    const required = question.required;
    // const { errors, touched} = useFormikContext<FormValues>();
    // const hasError = errors[question.id] && touched[question.id];

    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description ?? ""}</div>

            <Field as="textarea" rows={4} id={question.id} name={question.id} placeholder={question.properties?.placeholderText ?? ""} className={`border p-5 rounded-lg outline-none border-gray-400 transition duration-200 focus:border-${themeColor}-500`} />
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

export default ViewLongAnwer