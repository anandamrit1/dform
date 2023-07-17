import { FormField } from '../../../types/Form'
// import { useFormikContext} from 'formik';
import {  Field, ErrorMessage } from 'formik';

// interface FormValues {
//     [key: string]: any;
// }

const ViewEmailAnswer = ({ question, themeColor }: { question: FormField; themeColor: string }) => {

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
            <Field name={question.id} type="email" placeholder={question.properties?.placeholderText ?? ""} className={`border border-gray-400 focus:border-${themeColor}-500 p-5 rounded-lg outline-none transition duration-200`} />
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

export default ViewEmailAnswer