import { QuestionType } from '../../../types/Form'
// import { useFormikContext} from 'formik';
import {  Field, ErrorMessage } from 'formik';
import { AccountBalanceWallet } from '@mui/icons-material'



const ViewWalletConnect = ({ question, themeColor }: { question: QuestionType; themeColor: string }) => {
    
    const required = question.required;
    
    // const { setFieldValue } = useFormikContext();

    const addWallet = () => {
        // logic for adding the wallet and setting the feild value to 1 or zero accroding to wallet added or not.

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
                <div onClick={addWallet} className={`border min-w-[190px] w-[190px] border-black cursor-pointer hover:bg-${themeColor}-200 focus:border-${themeColor}-500 p-3 rounded-lg outline-none transition duration-200`}>
                    <div className="font-semibold flex items-center space-x-2 justify-center">
                    <AccountBalanceWallet className="h-5 w-5"/>
                    <div>Connect Wallet</div>
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

export default ViewWalletConnect