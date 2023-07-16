import { QuestionType } from '../../../types/Form'
// import { useFormikContext} from 'formik';
import {  Field, ErrorMessage, FormikProps  } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface QuestionProps {
    question: QuestionType
    themeColor: string
}

const ViewDateAnswer: React.FC<QuestionProps> = ({ question, themeColor}) => {

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
            <Field name={question.formFieldId}>
                {({ field, form }: { field: any; form: FormikProps<any> }) => (
                    <DatePicker
                        id={question.formFieldId}
                        {...field}
                        selected={field.value}
                        onChange={(date) => form.setFieldValue(question.formFieldId, date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date"
                        className={`border min-w-[190px] w-1/3 border-gray-400 focus:border-${themeColor}-500 p-5 rounded-lg outline-none transition duration-200`}
                        calendarClassName={`bg-${themeColor}-300`}
                        dayClassName=""
                    />
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

export default ViewDateAnswer