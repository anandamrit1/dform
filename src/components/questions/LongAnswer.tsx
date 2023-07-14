import ContentEditableInput from '../ContentEditableInput'
import ToggleSwitch from '../ToggleSwitch'
import { IconButton } from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'
import { QuestionType } from '../../types/Form'
import Select from '../Select'

export type LongAnswerEditableProps = {
    question: QuestionType,
    onChange: (formFieldId: string, question: QuestionType) => void
}

export type LongAnswerComponentProps = {
    question: QuestionType,
    isPreview?: boolean
}

export function LongAnswerEditable({ question, onChange }: LongAnswerEditableProps) {
    const handleChange = (key: string, value: any) => {
        const editedQuestion: QuestionType = {
            ...question,
            [key]: value
        }
        onChange(question.formFieldId, editedQuestion);
    }
    return (
        <div className="flex flex-col items-center rounded-lg p-10 my-4 m-auto border-[1px] border-black w-full bg-white">
            <div id="form-metadata" className="flex flex-col w-full items-center gap-3">
                <Select 
                    value={question.type}
                    formFieldId={question.formFieldId}
                    className='w-1/3 self-start mb-4'
                />
                <ContentEditableInput
                    placeholder='Question'
                    value={question.title}
                    onChange={(value) => handleChange("title", value)}
                    className='font-bold bg-gray-100'
                />
                <ContentEditableInput
                    placeholder='Description'
                    value={question.description}
                    onChange={(value) => handleChange("description", value)}
                    className='text-sm text-gray-400 bg-gray-100'
                />
                <textarea className='min-h-[120px] w-full resize-y px-4 py-5 rounded-md border-[1px] border-gray-400 focus:border-gray-800 text-gray-400 focus:outline-none' placeholder='Your Answer' onChange={(e) => handleChange("properties", {"placeholder": e.target.value})} value={question.properties["placeholder"]} />
                <div className='flex items-center justify-end w-full px-4 pt-10 gap-1'>
                    <ToggleSwitch id="longAnswer" checked={question.required} onChange={() => handleChange("required", !question.required)}/>
                    <IconButton className='m-auto'>
                        <DeleteOutline />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export function LongAnswerComponent({ question }: LongAnswerComponentProps) {
    return <div className="flex flex-col items-center rounded-xl py-4 cursor-pointer hover:bg-gray-100 m-auto border-black w-full bg-white">
        <div id="form-metadata" className="flex flex-col w-full items-center">
            <div
                className="outline-none hover:bg-gray-100 font-bold rounded-md w-5/6 p-2" >{question.title}
            </div>
            <div
                className="outline-none hover:bg-gray-100 rounded-md text-sm text-gray-400 w-5/6 p-2" >
                {question.description}
            </div>
            <textarea className='min-h-[120px] w-5/6 px-4 py-5 my-4 resize-y rounded-md border-[1px] border-gray-400 focus:border-gray-800 text-gray-400 focus:outline-none' placeholder='Your Answer' value={question.properties["placeholder"]} />
        </div>
    </div>
}