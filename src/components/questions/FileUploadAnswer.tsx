import ContentEditableInput from '../ContentEditableInput'
import ToggleSwitch from '../ToggleSwitch'
import { IconButton } from '@mui/material'
import { DeleteOutline, FileUpload } from '@mui/icons-material'
import { FormField } from '../../types/Form'
import Select from '../Select'

export type FileUploadEditableProps = {
    question: FormField,
    onChange: (id: string, question: FormField) => void,
    handleDeleteQuestion: (id: string) => void
}

export type FileUploadComponentProps = {
    question: FormField,
    isPreview?: boolean
}

export function FileUploadEditable({ question, onChange, handleDeleteQuestion }: FileUploadEditableProps) {
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
                <div className="border-[1px] border-gray-300 text-gray-500 rounded-lg w-1/3 px-2 py-4 my-2 self-start" >
                    <span className='mr-2'><FileUpload /></span>File Upload
                </div>
                <div className='flex items-center justify-end w-full px-4 pt-10 gap-1'>
                    <ToggleSwitch id={question.id} checked={question.required ?? false} onChange={() => handleChange("required", !question.required)} />
                    <IconButton onClick={() => handleDeleteQuestion(question.id)} className='m-auto'>
                        <DeleteOutline />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export function FileUploadComponent({ question }: FileUploadComponentProps) {
    return <div className="flex flex-col items-center rounded-xl py-4 cursor-pointer hover:bg-gray-100 m-auto border-black w-full bg-white">
        <div id="form-metadata" className="flex flex-col w-full items-center">
            <div
                className="outline-none hover:bg-gray-100 font-bold rounded-md w-5/6 p-2" >{question.title}
            </div>
            <div
                className="outline-none hover:bg-gray-100 rounded-md text-sm text-gray-400 w-5/6 p-2" >
                {question.description ?? ""}
            </div>
            <div className='w-5/6'>
            <div className="border-[1px] border-gray-300 text-gray-500 rounded-lg w-1/3 px-2 py-4 my-2 self-start" >
                    <span className='mr-2'><FileUpload /></span>File Upload
            </div>
            </div>
        </div>
    </div>
}