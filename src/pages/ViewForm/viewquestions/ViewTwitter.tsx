import { QuestionType } from '../../../types/Form'
// import { useFormikContext} from 'formik';
import {  Field, ErrorMessage } from 'formik';
import { FaTwitter } from 'react-icons/fa';




const ViewTwitter = ({ question, themeColor }: { question: QuestionType; themeColor: string }) => {
    
    const required = question.required;
    
    // const { setFieldValue } = useFormikContext();

    const addTwitter = () => {
        // logic for adding the twitter and setting the feild value to 1 or zero accroding to twitter added or not.

        // setFieldValue(question.formFieldId, 1 or 0); // Update formik field value
    };


    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description}</div>
            {/* <Field name={question.formFieldId} type="email" placeholder={question.properties.placeholder} className={`border border-gray-400 focus:border-${themeColor}-500 p-5 rounded-lg outline-none transition duration-200`} /> */}
            <Field name={question.formFieldId}>
            {() => (
                <div onClick={addTwitter} className={`border min-w-[190px] w-[190px] bg-blue-500 cursor-pointer hover:opacity-80 focus:border-${themeColor}-500 p-3 rounded-lg outline-none transition duration-200`}>
                    <div className="font-semibold flex items-center space-x-2 justify-center text-white">
                    <FaTwitter className="h-6 w-6"/>
                    <div>Connect Twitter</div>
                    </div>
                </div>
            )}
            </Field>
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

export default ViewTwitter