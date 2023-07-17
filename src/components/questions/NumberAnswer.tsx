import ContentEditableInput from '../ContentEditableInput'
import ToggleSwitch from '../ToggleSwitch'
import { IconButton } from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'
import { FormField } from '../../types/Form'
import Select from '../Select'

export type NumberAnswerEditableProps = {
    question: FormField,
    onChange: (id: string, question: FormField) => void,
    handleDeleteQuestion: (id: string) => void
}

export type NumberAnswerComponentProps = {
    question: FormField,
    isPreview?: boolean
}

export function NumberAnswerEditable({ question, onChange, handleDeleteQuestion }: NumberAnswerEditableProps) {
    const handleChange = (key: string, value: any) => {
        const editedQuestion: FormField = {
            ...question,
            [key]: value
        }
        onChange(question.id, editedQuestion);
    }

    return (
        <div className="flex flex-col items-center rounded-lg p-10 my-4 m-auto border-[1px] border-black w-full bg-white">
            <div id="form-metadata" className="flex flex-col w-full items-center gap-3">
                <Select 
                    value={question.type}
                    id={question.id}
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
                    value={question.description ?? ""}
                    onChange={(value) => handleChange("description", value)}
                    className='text-sm text-gray-400 bg-gray-100'
                />
                <div className="flex w-full"> <input className='px-4 py-5 w-2/5 rounded-md border-[1px] border-gray-400 focus:border-gray-800 text-gray-400 focus:outline-none' placeholder='Your Answer' value={question?.properties ? question?.properties["placeholderText"] : ""} /> </div>
                <div className='flex items-center justify-end w-full px-4 pt-10 gap-1'>
                    <ToggleSwitch id="Number" checked={question.required ?? false} onChange={() => handleChange("required", !question.required)}/>
                    <IconButton onClick={() => handleDeleteQuestion(question.id)} className='m-auto'>
                        <DeleteOutline />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export function NumberAnswerComponent({ question }: NumberAnswerComponentProps) {
    return <div className="flex flex-col items-center rounded-xl py-4 cursor-pointer hover:bg-gray-100 m-auto border-black w-full bg-white">
        <div id="form-metadata" className="flex flex-col w-full items-center">
            <div
                className="outline-none hover:bg-gray-100 font-bold rounded-md w-5/6 p-2" >{question.title}
            </div>
            <div
                className="outline-none hover:bg-gray-100 rounded-md text-sm text-gray-400 w-5/6 p-2" >
                {question.description ?? ""}
            </div>
            <div className="flex w-5/6"> <input className='w-2/5 min-w-[160px] px-4 py-5 my-4 rounded-md border-[1px] border-gray-400 focus:border-gray-800 text-gray-400 focus:outline-none' placeholder='Your Answer' value={question?.properties ? question?.properties["placeholderText"] : ""} /> </div>
        </div>
    </div>
}