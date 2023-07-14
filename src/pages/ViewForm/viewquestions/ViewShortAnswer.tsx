import { QuestionType } from '../../../types/Form'
import {  Field, ErrorMessage } from 'formik';

// interface FormValues {
//     [key: string]: any;
// }

const ViewShortText = ({ question, themeColor }: { question: QuestionType; themeColor: string }) => {
    const required = question.required;
    // const { errors, touched} = useFormikContext<FormValues>();
    // const hasError = errors[question.formFieldId] && touched[question.formFieldId];

    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description}</div>

            <Field type="text" id={question.formFieldId} name={question.formFieldId} placeholder={question.properties.placeholder} className={`border p-5 rounded-lg outline-none border-gray-400 transition duration-200 focus:border-${themeColor}-500 }`} />
            <div className="flex justify-start w-full">
                <ErrorMessage name={question.formFieldId}>
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

export default ViewShortText
