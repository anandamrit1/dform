import { DEFAULT_SHORT_ANSWER_QUESTION } from "./constants"
import { v4 as uuidv4 } from 'uuid';

export const CreateNewQuestion = (questionType: string) => {
    const newQuestion = GetDefaultQuestion(questionType)
    newQuestion.formFieldId = uuidv4()
    return newQuestion;
}

export const GetDefaultQuestion = (questionType: string) => {
    switch (questionType) {
        case 'shortAnswer':
            return DEFAULT_SHORT_ANSWER_QUESTION
        default:
            return DEFAULT_SHORT_ANSWER_QUESTION
    }
}