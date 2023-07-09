import React, { useEffect, useRef, useState } from 'react'
import { QuestionType } from '../../types/Form';
import { ShortAnswerEditable, ShortAnswerComponent } from '../../components/questions/ShortAnswer';
import { LongAnswerEditable, LongAnswerComponent } from '../../components/questions/LongAnswer';
import { SingleOptionAnswerComponent, SingleOptionAnswerEditable } from '../../components/questions/SingleOptionAnswer';
import { MultipleOptionAnswerComponent, MultipleOptionAnswerEditable } from '../../components/questions/MultipleOptionAnswer';
import { EmailAnswerComponent, EmailAnswerEditable } from '../../components/questions/EmailAnswer';

interface QuestionProps {
    question: QuestionType,
    handleQuestionChange: (formFieldId: string, question: QuestionType) => void
}

function useClickOutside(ref: React.RefObject<HTMLDivElement>, callback: Function) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}

const Question: React.FC<QuestionProps> = ({ question, handleQuestionChange }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const wrapperRef = useRef<HTMLDivElement>(null);
    useClickOutside(wrapperRef, () => setIsEditing(false));

    const onFocus = () => {
        setIsEditing(true);
    };
    switch (question.type) {
        case 'shortAnswer':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <ShortAnswerEditable onChange={handleQuestionChange} question={question} />
                        : <ShortAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'longAnswer':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <LongAnswerEditable onChange={handleQuestionChange} question={question} />
                        : <LongAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'singleOption':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <SingleOptionAnswerEditable onChange={handleQuestionChange} question={question} />
                        : <SingleOptionAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'multipleOption':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <MultipleOptionAnswerEditable onChange={handleQuestionChange} question={question} />
                        : <MultipleOptionAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'email':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <EmailAnswerEditable onChange={handleQuestionChange} question={question} />
                        : <EmailAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        default:
            return <></>
    }
};

export default Question
