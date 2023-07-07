export type Form = {
    thumbnailUrl: string
    backgroundColor: string,
    backgroundUrl: null,
    font: string,
    questions: QuestionType[]
}

export type QuestionType = {
    required: boolean,
    title: string,
    type: string,
    description: string,
    properties: Record<string, any>,
    formFieldId: string
}

