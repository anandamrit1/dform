import { QuestionType } from '../../../types/Form'
// import { useFormikContext} from 'formik';
import {  Field, ErrorMessage } from 'formik';

// interface FormValues {
//     [key: string]: any;
// }

const ViewEmailAnswer = ({ question }: { question: QuestionType }) => {

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
            <Field name={question.formFieldId} type="email" placeholder={question.properties.placeholder} className={`border border-gray-400 focus:border-black p-5 rounded-lg outline-none transition duration-200`} />
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

export default ViewEmailAnswer