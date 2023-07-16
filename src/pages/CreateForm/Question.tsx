import React, { useEffect, useRef, useState } from 'react'
import { ShortAnswerEditable, ShortAnswerComponent } from '../../components/questions/ShortAnswer';
import { LongAnswerEditable, LongAnswerComponent } from '../../components/questions/LongAnswer';
import { SingleOptionAnswerComponent, SingleOptionAnswerEditable } from '../../components/questions/SingleOptionAnswer';
import { MultipleOptionAnswerComponent, MultipleOptionAnswerEditable } from '../../components/questions/MultipleOptionAnswer';
import { EmailAnswerComponent, EmailAnswerEditable } from '../../components/questions/EmailAnswer';
import { LinkAnswerComponent, LinkAnswerEditable } from '../../components/questions/LinkAnswer';
import { NumberAnswerComponent, NumberAnswerEditable } from '../../components/questions/NumberAnswer';
import { DateAnswerComponent, DateAnswerEditable } from '../../components/questions/DateAnswer';
import { FileUploadComponent, FileUploadEditable } from '../../components/questions/FileUploadAnswer';
import { WalletConnectComponent, WalletConnectEditable } from '../../components/questions/WalletConnect';
import { TwitterComponent, TwitterEditable } from '../../components/questions/Twitter';
import { FormField } from '../../types/Form';

interface QuestionProps {
    question: FormField,
    handleQuestionChange: (id: string, question: FormField) => void
    handleDeleteQuestion: (id: string) => void
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

const Question: React.FC<QuestionProps> = ({ question, handleQuestionChange, handleDeleteQuestion }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const wrapperRef = useRef<HTMLDivElement>(null);
    useClickOutside(wrapperRef, () => setIsEditing(false));

    const onFocus = () => {
        setIsEditing(true);
    };
    switch (question.type) {
        case 'ShortText':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <ShortAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <ShortAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'LongText':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <LongAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <LongAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'MultipleChoice':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <SingleOptionAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <SingleOptionAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'MultipleChoice':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <MultipleOptionAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <MultipleOptionAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'email':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <EmailAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <EmailAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'link':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <LinkAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <LinkAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'Number':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <NumberAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <NumberAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'Date':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <DateAnswerEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <DateAnswerComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'Upload':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <FileUploadEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <FileUploadComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'FlowAddress':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <WalletConnectEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <WalletConnectComponent question={question} isPreview />
                    }
                </div>
            </>
        case 'TwitterAccount':
            return <>
                <div className='w-full' ref={wrapperRef} onClick={onFocus} >
                    {isEditing ?
                        <TwitterEditable handleDeleteQuestion={handleDeleteQuestion} onChange={handleQuestionChange} question={question} />
                        : <TwitterComponent question={question} isPreview />
                    }
                </div>
            </>
        default:
            return <></>
    }
};

export default Question
