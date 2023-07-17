import React, { useCallback, useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import Question from './Question';
import { AddCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Tooltip } from 'react-bootstrap';
import { GetDefaultQuestion } from '../../utils/QuestionUtils';
import AddQuestionModal from '../../components/AddQuestionModal';
import ContentEditableInput from '../../components/ContentEditableInput';
import { FieldType, Form, FormField } from '../../types/Form';
import { AdminFormType, adminFormAtom } from '.';
import { generateId } from '../../utils/GenerateId';
import { omit } from 'lodash';
import { AxiosInstance } from 'axios';
import { debounce } from '../../utils/debounce';
import { useAxios } from '../../utils/axios';
import Skeleton from "react-loading-skeleton";
import FormImage from '../../components/FormImage';


export const questionListAtom = atom<FormField[] | undefined>({
    key: 'questionListAtom',
    default: undefined
});




interface QuestionsListProps {
}


const QuestionsList: React.FC<QuestionsListProps> = () => {
    const [form, setForm] = useRecoilState(adminFormAtom);
    const [addQuestionModal, setAddQuestionModal] = useState(false);
    const [description, setDescription] = useState("");
    const [formImage, setFormImage] = useState<File | null>(null);

    const apiClient = useAxios()

    const questions = form?.feilds

    const handleQuestionChange = (id: string, question: FormField) => {
        const updatedQuestions = form?.feilds?.map((q) => {
            if (q.id === id) {
                return question;
            }
            return q;
        });
        const updatedForm = { ...form, feilds: updatedQuestions, id: form!.id }
        setForm(updatedForm);
    };

    const handleAddQuestionModalClose = () => {
        setAddQuestionModal(false);
    };

    const handleAddQuestion = (type: FieldType) => {
        const newQuestion = GetDefaultQuestion(type);
        newQuestion.id = generateId();
        if (newQuestion.properties) newQuestion.properties.id = generateId();
        const updatedForm = { ...form, feilds: [...form?.feilds!, newQuestion], id: form!.id }
        console.log("updatedFrom", updatedForm)
        setForm(updatedForm);
        handleAddQuestionModalClose();
    };

    const handleDeleteQuestion = useCallback((id: string) => {
        if (form?.feilds && form?.feilds?.length > 1) {
            const updatedQuestions = form.feilds.filter(q => q.id != id)
            const updatedForm = { ...form, feilds: updatedQuestions, id: form!.id }
            setForm(updatedForm);
        }
    }, [])

    console.log(questions)

    return (
        <>
            <div className="flex flex-col items-center rounded-lg p-10 min-h-[80%] gap-2 m-auto border-[1px] border-black lg:w-1/2 w-5/6 bg-white">
                {
                    form != undefined ?
                        <>
                            <div id="form-metadata" className="flex flex-col w-full items-center gap-2 py-6 px-10">
                                <div className="flex flex-row w-full justify-start">
                                    <FormImage />
                                </div>
                                <ContentEditableInput
                                    placeholder='Form Title'
                                    value={form?.description ?? ""}
                                    onChange={(value) => setForm((o) => ({ ...o, description: value, id: o!.id }))}
                                    className='font-bold text-2xl'
                                />
                                <ContentEditableInput
                                    placeholder='Form Description'
                                    value={description}
                                    onChange={(value) => setDescription(value)}
                                    className=''
                                />
                            </div>

                            {questions ? questions?.map((question, index) => (
                                <Question key={index} question={question} handleDeleteQuestion={handleDeleteQuestion} handleQuestionChange={handleQuestionChange} />
                            )) : <>Loading</>}
                            <div className="m-auto mt-8">
                                <Tooltip title="Add a question" placement="top">
                                    <IconButton onClick={() => setAddQuestionModal(true)}>
                                        <AddCircle fontSize="large" className="text-4xl cursor-pointer" />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </> : <QuestionsPageSkeleton />
                }
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


export const QuestionsPageSkeleton = () => {
    return <>
        <div className="flex flex-col w-full gap-2 py-6 px-10">
            <Skeleton
                style={{
                    width: "100%",
                    height: "64px",
                    borderRadius: "16px",
                    marginBottom: "64px",
                }}
                count={1}
            />
            <Skeleton
                style={{
                    width: "100%",
                    height: "144px",
                    borderRadius: "16px",
                    marginBottom: "48px",
                }}
                count={2}
            />
        </div>

    </>
}

export default QuestionsList;