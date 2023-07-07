import React from 'react';
import { QuestionType } from '../../types/Form';
import { atom, useRecoilState } from 'recoil';
import Question from './Question';
import { AddCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Tooltip } from 'react-bootstrap';


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
        }
    ]
});

interface QuestionsListProps {
}


const QuestionsList: React.FC<QuestionsListProps> = () => {
    const [questions, setQuestions] = useRecoilState(questionListAtom);

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

    return (
        <>
            {questions.map((question, index) => (
                <Question key={index} question={question} handleQuestionChange={handleQuestionChange} />
            ))}
            <p className="m-auto mt-8">
                <IconButton onClick={() => {}}>
                    <Tooltip title="Add a question" placement="top">
                        <AddCircle fontSize="large" className="text-4xl cursor-pointer" />
                    </Tooltip>
                </IconButton>
            </p>
        </>
    );
};

export default QuestionsList;