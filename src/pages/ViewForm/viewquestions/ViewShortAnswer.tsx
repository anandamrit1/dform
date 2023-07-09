import { useState } from 'react';
import { QuestionType } from '../../../types/Form'
const ViewShortText = ({ question }: { question: QuestionType }) => {
    const [text, setText] = useState('');
    const [showRequired, setShowRequired] = useState(false);

    const required = question.required;
    const MAX_CHARACTERS = 150;
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length == 0 && required) setShowRequired(true);
        else setShowRequired(false);
        if (value.length <= MAX_CHARACTERS) {
            setText(value);
        }
    };

    const remainingCharacters = MAX_CHARACTERS - text.length;
    const isExceededLimit = remainingCharacters < 0;

    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description}</div>
            <input type="text" value={text} onChange={handleTextChange} placeholder={question.properties.placeholder} className={`border ${(isExceededLimit || showRequired) ? 'focus:border-red-500' : 'focus:border-black'} p-5 rounded-lg outline-none border-gray-400  transition duration-200`} />
            <div className="flex justify-between w-full">
                <div className='text-red-500 text-sm'> {showRequired ? "Required" : ""} </div>
                {isExceededLimit && (
                    <div className="text-red-500 text-sm">Max 150 characters</div>
                )}
                {!isExceededLimit && (
                    <div className="text-gray-400 text-sm">{remainingCharacters} characters remaining</div>
                )}
            </div>
        </div>
    )
}

export default ViewShortText