import classNames from "classnames"
import { useRecoilState } from "recoil";
import { questionListAtom } from "../pages/CreateForm/QuestionList";
import { GetDefaultQuestion } from "../utils/QuestionUtils";

export type SelectProps = {
    className?: string,
    value: string,
    formFieldId: string
}


function Select({className, value, formFieldId}: SelectProps) {
    const setQuestions = useRecoilState(questionListAtom)[1];
    
    const handleTypeChange = (type: string) => {
        setQuestions((oldQuestions) => {
            const newQuestions = oldQuestions.map((q) => {
                if (q.formFieldId === formFieldId) {
                    const { title, description, required } = q;
                    const question = GetDefaultQuestion(type);

                    return {
                        ...question,
                        type,
                        title,
                        description,
                        required,
                        formFieldId,
                    };
                }
                return q;
            });
            return newQuestions;
        });
    };

    console.log(value);
  return (
    <select value={value} onChange={(e) => handleTypeChange(e.target.value)} className={classNames("px-4 py-3 rounded-md outline-none border-[1px] border-black focus:bg-gray-100 cursor-pointer", className)}>
        <option value="shortAnswer">Short Answer</option>
        <option value="longAnswer">Long Answer</option>
        <option value="singleOption">Single Option</option>
        <option value="multipleOption">Multiple Options</option>
        <option value="email">Email</option>
        <option value="link">Link</option>
        <option value="number">Number</option>
        <option value="date">Date</option>
        <option value="upload">File Upload</option>
        <option value="walletConnect">Connect Wallet</option>
        <option value="twitter">Connect Twitter</option>
    </select>
  )
}

export default Select
