import classNames from "classnames"
import { useRecoilState } from "recoil";
import { questionListAtom } from "../pages/CreateForm/QuestionList";
import { GetDefaultQuestion } from "../utils/QuestionUtils";
import { FieldType } from "../types/Form";
import { adminFormAtom } from "../pages/CreateForm";

export type SelectProps = {
    className?: string,
    value: string,
    id: string
}


function Select({className, value, id}: SelectProps) {
    const [form, setForm] = useRecoilState(adminFormAtom);
    
    const handleTypeChange = (type: FieldType) => {
        const updatedQuestions = form?.feilds?.map((q) => {
            if (q.id === id) {
                const { title, description, required } = q;
                    const question = GetDefaultQuestion(type);
                    console.log(question)
                    return {
                        ...question,
                        type,
                        title,
                        required,
                        description,
                        id,
                    };
            }
            return q;
        });
        const updatedForm = {...form, feilds: updatedQuestions, id: form!.id}
        setForm(updatedForm);
    };

  return (
    <select value={value} onChange={(e) => handleTypeChange(e.target.value as FieldType)} className={classNames("px-4 py-3 rounded-md outline-none border-[1px] border-black focus:bg-gray-100 cursor-pointer", className)}>
        <option value="ShortText">Short Answer</option>
        <option value="LongText">Long Answer</option>
        <option value="MultipleChoice">Single Option</option>
        <option value="MultipleChoice">Multiple Options</option>
        <option value="email">Email</option>
        <option value="link">Link</option>
        <option value="Number">Number</option>
        <option value="Date">Date</option>
        <option value="Upload">File Upload</option>
        <option value="FlowAddress">Connect Wallet</option>
        <option value="TwitterAccount">Connect Twitter</option>
    </select>
  )
}

export default Select
