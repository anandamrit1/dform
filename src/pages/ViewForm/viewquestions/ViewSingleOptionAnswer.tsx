import { useState, useEffect } from 'react'
import { QuestionType } from '../../../types/Form'
const ViewSingleSelect = ({ question }: { question: QuestionType }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [otherOptionText, setOtherOptionText] = useState('');
    const required = question.required;
    useEffect(() => {
        if (required && question.properties.options.length > 0) {
            setSelectedOption(question.properties.options[0]);
        }
    }, [required, question.properties.options]);
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedOption((prevSelectedOption) =>
            prevSelectedOption === value ? "" : value
        );
    };
    const handleOptionDeselect = () => {
        if (!required)
            setSelectedOption('');
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
                        <label key={index} className='flex justify-start items-center space-x-2'>
                            <input type="radio" value={option} checked={selectedOption === option} onChange={handleOptionChange} onClick={handleOptionDeselect} className='h-6 w-6 cursor-pointer' />
                            <div className='cursor-pointer'>{option}</div>
                        </label>
                        {(selectedOption === 'Other' && option == 'Other') && (
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
            </div>
        </div>
    )
}

export default ViewSingleSelect