import React, { useState } from 'react';
import { QuestionType } from '../../types/Form';
import { atom, useRecoilState } from 'recoil';
import Question from './Question';
import { AddCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Tooltip } from 'react-bootstrap';
import { GetDefaultQuestion } from '../../utils/QuestionUtils';
import AddQuestionModal from '../../components/AddQuestionModal';
import ContentEditableInput from '../../components/ContentEditableInput';
import { formTitleAtom } from '.';


export const questionListAtom = atom<QuestionType[]>({
    key: 'questionListAtom',
    default: [
        {
            "title": "What is your name?",
            "description": "Please enter your full name",
            "type": "shortAnswer",
            "required": false,
            "properties": {
                "placeholder": "Your Answer"
            },
            "formFieldId": "121"
        },
        {
            "title": "What do you study?",
            "description": "Please add details about your course",
            "type": "longAnswer",
            "required": false,
            "properties": {
                "placeholder": "Your Answer"
            },
            "formFieldId": "123"
        },
        {
            "title": "What is your name?",
            "description": "Please enter your full name",
            "type": "singleOption",
            "required": false,
            "properties": {
                "options": ["Option 1", "Option 2", "Option 3"]
            },
            "formFieldId": "singleOption"
        },
        {
            "title": "What is your name?",
            "description": "Please enter your full name",
            "type": "multipleOption",
            "required": false,
            "properties": {
                "options": ["Option 1", "Option 2", "Option 3"]
            },
            "formFieldId": "1234"
        },
        {
            "title": "What is your email?",
            "description": "Please enter your email",
            "type": "email",
            "required": false,
            "properties": {
                "placeholder": "Your Email"
            },
            "formFieldId": "12345"
        }
    ]
});

interface QuestionsListProps {
}


const QuestionsList: React.FC<QuestionsListProps> = () => {
    const [questions, setQuestions] = useRecoilState(questionListAtom);
    const [title, setTitle] = useRecoilState(formTitleAtom);

    const [addQuestionModal, setAddQuestionModal] = useState(false);
    const [description, setDescription] = useState("");


    const handleQuestionChange = (formFieldId: string, question: QuestionType) => {
        setQuestions((oldQuestions) => {
            const newQuestions = oldQuestions.map((q) => {
                if (q.formFieldId === formFieldId) {
                    return question;
                }
                return q;
            });
            return newQuestions;
        });
    };

    const handleAddQuestionModalClose = () => {
        setAddQuestionModal(false);
    };

    const handleAddQuestion = (type: string) => {
        const newQuestion = GetDefaultQuestion(type);
        setQuestions((oldQuestions) => [...oldQuestions, newQuestion]);
        handleAddQuestionModalClose();
    };

    return (
        <>
            <div className="flex flex-col items-center rounded-lg p-10 min-h-[80%] gap-2 m-auto border-[1px] border-black lg:w-1/2 w-5/6 bg-white">
                    <div id="form-metadata" className="flex flex-col w-full items-center gap-2 py-6 px-10">
                            <ContentEditableInput
                                placeholder='Form Title'
                                value={title}
                                onChange={(value) => setTitle(value)}
                                className='font-bold text-2xl'
                            />
                            <ContentEditableInput
                                placeholder='Form Description'
                                value={description}
                                onChange={(value) => setDescription(value)}
                                className=''
                            />
                    </div>

                    {questions.map((question, index) => (
                <Question key={index} question={question} handleQuestionChange={handleQuestionChange} />
            ))}
            <div className="m-auto mt-8">
                <Tooltip title="Add a question" placement="top">
                    <IconButton onClick={() => setAddQuestionModal(true)}>
                        <AddCircle fontSize="large" className="text-4xl cursor-pointer" />
                    </IconButton>
                </Tooltip>
            </div>
                    <div className="m-auto mt-8">
                        Powered by <span className="font-bold cursor-pointer">TaleFlow</span>
                    </div>
                </div>
            
            {addQuestionModal && (
                <div>
                    <div
                        onClick={handleAddQuestionModalClose}
                        className="absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"
                    ></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <AddQuestionModal
                            handleClose={handleAddQuestionModalClose}
                            handleAddQuestion={handleAddQuestion}
                        />
                    </div>
                </div>
            )}

        </>
    );
};

export default QuestionsList;