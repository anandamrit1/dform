import { DEFAULT_LONG_ANSWER_QUESTION, DEFAULT_MULTIPLE_OPTION_ANSWER_QUESTION, DEFAULT_SHORT_ANSWER_QUESTION, DEFAULT_SINGLE_OPTION_ANSWER_QUESTION } from "./constants"
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
        case 'longAnswer':
            return DEFAULT_LONG_ANSWER_QUESTION
        case 'singleOption':
            return DEFAULT_SINGLE_OPTION_ANSWER_QUESTION
        case 'multipleOption':
            return DEFAULT_MULTIPLE_OPTION_ANSWER_QUESTION
        case 'email':
            return DEFAULT_LONG_ANSWER_QUESTION
        default:
            return DEFAULT_SHORT_ANSWER_QUESTION
    }
}