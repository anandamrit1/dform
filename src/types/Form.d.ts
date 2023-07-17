export type Form = {
    id: string;
    description?: string;
    isCaptchaEnabled?: boolean;
    isEmailCopyOfResponseEnabled?: boolean;
    isPublished?: boolean;
    metadata?: Record<string, Record<string, string>>;
    backgroundColor?: string;
    backgroundUrl?: string;
};

export type FormField = {
    id: string;
    required?: boolean;
    title: string;
    type: FieldType;
    description?: string;
    fieldOrder: number;
    properties?: FormFeildProperty;
}

export type FieldType = 'ShortText' | 'LongText' | 'Number' | 'Rating' | 'MultipleChoice' | 'FlowAddress' |
    'TwitterAccount' | 'Upload' | 'Date' | 'PhysicalAddress' | 'email' | 'link' | 'walletConnect'

export type FormFeildProperty = {
    id: string;
    placeholderText?: string;
    verifySignature?: boolean;

    choices?: Choice[];

    allowOtherChoice?: boolean;
    maxSelectionCount?: number;
    minSelectionCount?: number;
    max?: number;
    min?: number;
    endLabel?: string;
    startLabel?: string;
    numberType?: NumberType;
    validations?: ShortTextValidation[];
}

export type Choice = {
    id: string;
    label: string;
}

export type GetFormRequestBody = {
    id: string;
};

export type CreateFormRequestBody = {
    form: Form;
    feilds: FormField[]
};

// export type FormField = {
//     required: boolean,
//     title: string,
//     type: string,
//     description: string,
//     properties: Record<string, any>,
//     id: string
// }



