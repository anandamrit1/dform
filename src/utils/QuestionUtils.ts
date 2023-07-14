import { DEFAULT_DATE_ANSWER_QUESTION, DEFAULT_LINK_ANSWER_QUESTION, DEFAULT_EMAIL_ANSWER_QUESTION, DEFAULT_FILE_UPLOAD_ANSWER_QUESTION, DEFAULT_LONG_ANSWER_QUESTION, DEFAULT_MULTIPLE_OPTION_ANSWER_QUESTION, DEFAULT_NUMBER_ANSWER_QUESTION, DEFAULT_SHORT_ANSWER_QUESTION, DEFAULT_SINGLE_OPTION_ANSWER_QUESTION, DEFAULT_TWITTER_ANSWER_QUESTION, DEFAULT_WALLET_CONNECT_ANSWER_QUESTION } from "./constants"
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
            return DEFAULT_EMAIL_ANSWER_QUESTION
        case 'link':
            return DEFAULT_LINK_ANSWER_QUESTION
        case 'number':
            return DEFAULT_NUMBER_ANSWER_QUESTION
        case 'date':
            return DEFAULT_DATE_ANSWER_QUESTION
            return DEFAULT_EMAIL_ANSWER_QUESTION
        case 'upload':
            return DEFAULT_FILE_UPLOAD_ANSWER_QUESTION
        case 'walletConnect':
            return DEFAULT_WALLET_CONNECT_ANSWER_QUESTION
        case 'twitter':
            return DEFAULT_TWITTER_ANSWER_QUESTION
        default:
            return DEFAULT_SHORT_ANSWER_QUESTION
    }
}