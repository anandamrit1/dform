import { FormField } from "../types/Form"
import { generateId } from "./GenerateId"

export const DEFAULT_SHORT_ANSWER_QUESTION: FormField = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "ShortText",
    "required": false,
    "properties": {
        "id": generateId(),
        "placeholderText": "Your Answer"
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const DEFAULT_LONG_ANSWER_QUESTION: FormField = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "LongText",
    "required": false,
    "properties": {
        "id": generateId(),
        "placeholderText": "Your Answer"
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const DEFAULT_SINGLE_OPTION_ANSWER_QUESTION: FormField = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "MultipleChoice",
    "required": false,
    "properties": {
        "id": generateId(),
        "choices": [
            {
                "id": generateId(),
                "label": "Option 1"
            },
            {
                "id": generateId(),
                "label": "Option 2"
            }
        ]
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const DEFAULT_MULTIPLE_OPTION_ANSWER_QUESTION: FormField = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "MultipleChoice",
    "required": false,
    "properties": {
        "id": "123",
        "choices": [
            {
                "id": "12",
                "label": "Option 1"
            },
            {
                "id": "12q",
                "label": "Option 2"
            }
        ]
    },
    "id": "1245385",
    "fieldOrder": 0
}

export const DEFAULT_EMAIL_ANSWER_QUESTION: FormField = {
    "title": "What is your email?",
    "description": "Please enter your email",
    "type": "email",
    "required": false,
    "properties": {
        "id": "123",
        "placeholderText": "Enter your email"
    },
    "id": "12345345",
    "fieldOrder": 0
}

export const DEFAULT_LINK_ANSWER_QUESTION: FormField = {
    "title": "What is your link?",
    "description": "Please enter your link",
    "type": "link",
    "required": false,
    "properties": {
        "id": "123",
        "placeholderText": "Paste you link here."
    },
    "id": "1234545",
    "fieldOrder": 0
}

export const DEFAULT_NUMBER_ANSWER_QUESTION: FormField = {
    "title": "What is your number?",
    "description": "Please enter your number",
    "type": "Number",
    "required": false,
    "properties": {
        "id": generateId()
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const DEFAULT_DATE_ANSWER_QUESTION: FormField = {
    "title": "What is your date?",
    "description": "Please enter your date",
    "type": "Date",
    "required": false,
    "properties": {
        "id": generateId(),
        "placeholderText": "Your Answer"
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const DEFAULT_FILE_UPLOAD_ANSWER_QUESTION: FormField = {
    "title": "Type your question here",
    "description": "Add your description here",
    "type": "Upload",
    "required": false,
    "properties": {
        "id": generateId()
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const DEFAULT_WALLET_CONNECT_ANSWER_QUESTION: FormField = {
    "title": "Type your question here",
    "description": "Add your description here",
    "type": "FlowAddress",
    "required": false,
    "properties": {
        "id": generateId()
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const DEFAULT_TWITTER_ANSWER_QUESTION: FormField = {
    "title": "What is your Twitter username?",
    "description": "Please verify your account by clicking the button below.",
    "type": "TwitterAccount",
    "required": false,
    "properties": {
        "id": generateId()
    },
    "id": generateId(),
    "fieldOrder": 0
}

export const mockForm = {
    "thumbnailUrl": "logo3",
    "backgroundColor": "red",
    "backgroundUrl": null,
    "font": "",
    "title": "Testing Form",
    "accessGateNft": {
        "address": "12344"
    }
}

export const mockQuestions = [
    {
        "title": "What is your name?",
        "description": "Please enter your full name",
        "type": "ShortText",
        "required": false,
        "properties": {
            "placeholder": "Your Answer"
        },
        "id": "121"
    },
    {
        "title": "What do you study?",
        "description": "Please add details about your course",
        "type": "LongText",
        "required": false,
        "properties": {
            "placeholder": "Your Answer"
        },
        "id": "123"
    },
    {
        "title": "What is your name?",
        "description": "Please enter your full name",
        "type": "MultipleChoice",
        "required": false,
        "properties": {
            "options": ["Option 1", "Option 2", "Option 3"]
        },
        "id": "MultipleChoice"
    },
    {
        "title": "What is your name?",
        "description": "Please enter your full name",
        "type": "MultipleChoice",
        "required": false,
        "properties": {
            "options": ["Option 1", "Option 2", "Option 3"]
        },
        "id": "1234"
    },
    {
        "title": "What is your email?",
        "description": "Please enter your email",
        "type": "email",
        "required": false,
        "properties": {
            "placeholder": "Your Email"
        },
        "id": "12345"
    },
    {
        "title": "Enter Link here!",
        "description": "Please enter your link",
        "type": "link",
        "required": false,
        "properties": {
            "placeholder": "Your link"
        },
        "id": "123456"
    },
    {
        "title": "Enter Number here!",
        "description": "Enter Number",
        "type": "Number",
        "required": false,
        "properties": {
            "placeholder": "Your Number"
        },
        "id": "123457"
    },
    {
        "title": "Enter Date here!",
        "description": "Enter date",
        "type": "Date",
        "required": false,
        "properties": {
            "placeholder": "Your date"
        },
        "id": "123458"
    }
];

export const ACCESS_NODE_URLS = {
    'local': 'http://localhost:8888',
    'testnet': 'https://rest-testnet.onflow.org',
    'mainnet': 'https://rest-mainnet.onflow.org'
}

export const BLOCK_EXPLORER_URLS = {
    'testnet': 'https://testnet.flowscan.org',
    'mainnet': 'https://flowscan.org'
}

export const newEmptyForm = {
    "id": "test-form-id",
    "description": "test-form-description",
    "theme": {
        "id": "test-theme-form-id",
        "logoUrl": "test-logo-url",
        "backgroundColor": "test-background-color",
        "backgroundType": "Gradient",
        "font": "test-font"

    },
    "feilds": [
        {
            "id": "",
            "required": true,
            "title": "Form Field Title",
            "type": "ShortText",
            "description": "Form Field Description Updated Somehow",
            "fieldOrder": 1,
            "properties": {
                "id": "formFieldPropertyId",
                "placeholderText": "Enter your response",
                "verifySignature": true,
                "choices": [
                    {
                        "id": "choice1",
                        "label": "Choice 1"
                    },
                    {
                        "id": "choice2",
                        "label": "Choice 2"
                    }
                ],
                "allowOtherChoice": true,
                "maxSelectionCount": 2,
                "minSelectionCount": 1,
                "max": 10,
                "min": 1,
                "endLabel": "End Label",
                "startLabel": "Start Label",
                "numberType": "INTEGER",
                "validations": [
                    "URL"]
            }
        }
    ]
}