import { FormField } from "../types/Form";
import { generateId } from "./GenerateId";
import { DEFAULT_DATE_ANSWER_QUESTION, DEFAULT_LINK_ANSWER_QUESTION, DEFAULT_EMAIL_ANSWER_QUESTION, DEFAULT_FILE_UPLOAD_ANSWER_QUESTION, DEFAULT_LONG_ANSWER_QUESTION, DEFAULT_MULTIPLE_OPTION_ANSWER_QUESTION, DEFAULT_NUMBER_ANSWER_QUESTION, DEFAULT_SHORT_ANSWER_QUESTION, DEFAULT_SINGLE_OPTION_ANSWER_QUESTION, DEFAULT_TWITTER_ANSWER_QUESTION, DEFAULT_WALLET_CONNECT_ANSWER_QUESTION } from "./constants"

export const CreateNewQuestion = (FormField: string) => {
    const newQuestion = GetDefaultQuestion(FormField)
    newQuestion.id = generateId()
    return newQuestion;
}

export const GetDefaultQuestion = (FormField: string): FormField => {
    switch (FormField) {
        case 'ShortText':
            return DEFAULT_SHORT_ANSWER_QUESTION
        case 'LongText':
            return DEFAULT_LONG_ANSWER_QUESTION
        case 'MultipleChoice':
            return DEFAULT_SINGLE_OPTION_ANSWER_QUESTION
        case 'MultipleChoice':
            return DEFAULT_MULTIPLE_OPTION_ANSWER_QUESTION
        case 'email':
            return DEFAULT_EMAIL_ANSWER_QUESTION
        case 'link':
            return DEFAULT_LINK_ANSWER_QUESTION
        case 'Number':
            return DEFAULT_NUMBER_ANSWER_QUESTION
        case 'Date':
            return DEFAULT_DATE_ANSWER_QUESTION
        case 'Upload':
            return DEFAULT_FILE_UPLOAD_ANSWER_QUESTION
        case 'FlowAddress':
            return DEFAULT_WALLET_CONNECT_ANSWER_QUESTION
        case 'TwitterAccount':
            return DEFAULT_TWITTER_ANSWER_QUESTION
        default:
            return DEFAULT_SHORT_ANSWER_QUESTION
    }
}