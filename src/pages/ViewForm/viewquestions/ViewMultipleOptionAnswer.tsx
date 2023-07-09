import { useState } from 'react'
import { QuestionType } from '../../../types/Form'
const ViewMultiSelect = ({ question }: { question: QuestionType }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [otherOptionText, setOtherOptionText] = useState('');
    const required = question.required;
    const [showRequired, setShowRequired] = useState(false);
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (selectedOptions.includes(value)) 
        {
            if ((selectedOptions.length === 1) && required) setShowRequired(true);
            setSelectedOptions((prevSelectedOptions) =>
                prevSelectedOptions.filter((option) => option !== value)
            );
        } 
        else 
        {
            setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, value]);
            setShowRequired(false);
        }
    };
    const MAX_CHARACTERS = 150;
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length <= MAX_CHARACTERS) {
            setOtherOptionText(value);
        }
    };
    const remainingCharacters = MAX_CHARACTERS - otherOptionText.length;
    const isExceededLimit = remainingCharacters < 0;
    const arr = question.properties.options;
    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description}</div>
            <div className='flex flex-col space-y-5 text-sm w-full' >
                {arr.map((option: string, index: number) => (
                    <div className='w-full'>
                        <label key={index} className="flex justify-start items-center space-x-2">
                            <input type="checkbox" value={option} checked={selectedOptions.includes(option)} onChange={handleOptionChange} className="h-6 w-6 cursor-pointer" />
                            <div className="cursor-pointer">{option}</div>
                        </label>
                        {(selectedOptions.includes('Other') && option == 'Other') && (
                            <div className='w-full mt-5'>
                                <input type="text" value={otherOptionText} onChange={handleTextChange} placeholder='Here Enter you Text' className={`border ${(isExceededLimit) ? 'focus:border-red-500' : 'focus:border-black'} p-5 rounded-lg outline-none border-gray-400 w-full  transition duration-200`} />
                                <div className="flex justify-end w-full">

                                    {isExceededLimit && (
                                        <div className="text-red-500 text-sm">Max 150 characters</div>
                                    )}
                                    {!isExceededLimit && (
                                        <div className="text-gray-400 text-sm">{remainingCharacters} characters remaining</div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                { showRequired &&
                    ( <div className='text-red-500 text-sm'> Required </div> )
                }
            </div>
        </div>
    )
}

export default ViewMultiSelect