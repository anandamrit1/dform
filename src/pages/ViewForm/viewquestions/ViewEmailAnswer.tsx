import { useState } from 'react';
import { QuestionType } from '../../../types/Form'
const ViewEmailAnswer = ({ question }: { question: QuestionType }) => {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [showRequired, setShowRequired] = useState(false);
    const required = question.required;

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length == 0 && required) setShowRequired(true);
        else setShowRequired(false);
        setEmail(value);
        validateEmail(value);
    };

    const validateEmail = (email: string) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailPattern.test(email);
        setIsValidEmail(isValid);
    };
    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description}</div>
            <input type="text" placeholder={question.properties.placeholder} value={email} onChange={handleEmailChange} className={`border border-gray-400 ${((isValidEmail || email.length == 0) && !showRequired) ? 'focus:border-black' : 'focus:border-red-500'} p-5 rounded-lg outline-none transition duration-200`} />
            {!isValidEmail && (email.length > 0) && (
                <div className="text-sm text-red-500">Must be a valid email address</div>
            )}
            {showRequired && (
                <div className="text-sm text-red-500">Required</div>
            )}
        </div>
    )
}

export default ViewEmailAnswer