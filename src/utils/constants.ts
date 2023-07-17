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
    "backgroundColor": "green",
    "backgroundUrl": null,
    "font": "",
    "title": "Testing Form",
    "accessGateNft": {
        "address": "12344"
    }
}


export const ACCESS_NODE_URLS = {
    'local': 'http://localhost:8888',
    'testnet': 'https://rest-testnet.onflow.org',
    'mainnet': 'https://rest-mainnet.onflow.org'
}

export const BLOCK_EXPLORER_URLS = {
    'testnet': 'https://testnet.flowscan.org',
    'mainnet': 'https://flowscan.org'
}

export const pinataTokenJWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2NTBhNDU2NS02ZjM0LTQ1YTYtYmVmOS04ZmIxMGE0NmVlN2EiLCJlbWFpbCI6ImdhdXJhdmRoYWxsYTE0OTNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6Ijk2ZmUyNTE3MTViNTU4NGE0MTk1Iiwic2NvcGVkS2V5U2VjcmV0IjoiMWM1MjFiMDRiMjUyODM5MGU4MTkwNDU0NDk4MmYyNjJlMmZkY2JkNzc0YjI1YzI2YjQxM2RjM2VjODgzNzk1YSIsImlhdCI6MTY3NzQzNTY2N30.w8elVwSZ_U62af_MVKlVcawik9dQ-eLsoUVE4osqzlc"
export const pinataApiKey = "96fe251715b5584a4195"
export const pinataApiSecret = "1c521b04b2528390e81904544982f262e2fdcbd774b25c26b413dc3ec883795a"
