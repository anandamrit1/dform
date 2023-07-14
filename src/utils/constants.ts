export const DEFAULT_SHORT_ANSWER_QUESTION = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "shortAnswer",
    "required": false,
    "properties": {
        "placeholder": "Your Answer"
    },
    "formFieldId": "shortAnswer"
}

export const DEFAULT_LONG_ANSWER_QUESTION = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "longAnswer",
    "required": false,
    "properties": {
        "placeholder": "Your Answer"
    },
    "formFieldId": "11"
}

export const DEFAULT_SINGLE_OPTION_ANSWER_QUESTION = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "singleOption",
    "required": false,
    "properties": {
        "options": ["Option 1", "Option 2", "Option 3"]
    },
    "formFieldId": "singleOption"
}

export const DEFAULT_MULTIPLE_OPTION_ANSWER_QUESTION = {
    "title": "What is your name?",
    "description": "Please enter your full name",
    "type": "multipleOption",
    "required": false,
    "properties": {
        "options": ["Option 1", "Option 2", "Option 3"]
    },
    "formFieldId": "1234"
}

export const DEFAULT_EMAIL_ANSWER_QUESTION = {
    "title": "What is your email?",
    "description": "Please enter your email",
    "type": "email",
    "required": false,
    "properties": {
        "placeholder": "Your Email"
    },
    "formFieldId": "12345"
}

export const DEFAULT_LINK_ANSWER_QUESTION = {
    "title": "What is your link?",
    "description": "Please enter your link",
    "type": "link",
    "required": false,
    "properties": {
        "placeholder": "Your link"
    },
    "formFieldId": "123456"
}

export const DEFAULT_NUMBER_ANSWER_QUESTION = {
    "title": "What is your number?",
    "description": "Please enter your number",
    "type": "number",
    "required": false,
    "properties": {
        "placeholder": "Your number"
    },
    "formFieldId": "123457"
}

export const DEFAULT_DATE_ANSWER_QUESTION = {
    "title": "What is your date?",
    "description": "Please enter your date",
    "type": "date",
    "required": false,
    "properties": {
        "placeholder": "Your date"
    },
    "formFieldId": "123458"
}

export const DEFAULT_FILE_UPLOAD_ANSWER_QUESTION = {
    "title": "Type your question here",
    "description": "Add your description here",
    "type": "upload",
    "required": false,
    "properties": {
    },
    "formFieldId": "123453"
}

export const DEFAULT_WALLET_CONNECT_ANSWER_QUESTION = {
    "title": "Type your question here",
    "description": "Add your description here",
    "type": "walletConnect",
    "required": false,
    "properties": {
    },
    "formFieldId": "12345385"
}

export const DEFAULT_TWITTER_ANSWER_QUESTION = {
    "title": "What is your Twitter username?",
    "description": "Please verify your account by clicking the button below.",
    "type": "twitter",
    "required": false,
    "properties": {
    },
    "formFieldId": "1234538545"
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
    },
    {
        "title": "Enter Link here!",
        "description": "Please enter your link",
        "type": "link",
        "required": false,
        "properties": {
            "placeholder": "Your link"
        },
        "formFieldId": "123456"
    },
    {
        "title": "Enter Number here!",
        "description": "Enter Number",
        "type": "number",
        "required": false,
        "properties": {
            "placeholder": "Your Number"
        },
        "formFieldId": "123457"
    },
    {
        "title": "Enter Date here!",
        "description": "Enter date",
        "type": "date",
        "required": false,
        "properties": {
            "placeholder": "Your date"
        },
        "formFieldId": "123458"
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