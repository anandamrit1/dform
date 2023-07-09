import ContentEditableInput from '../ContentEditableInput'
import ToggleSwitch from '../ToggleSwitch'
import { IconButton, Radio } from '@mui/material'
import { Add, DeleteOutline } from '@mui/icons-material'
import { QuestionType } from '../../types/Form'
import Select from '../Select'
import ContentEditable from 'react-contenteditable'

export type SingleOptionAnswerEditableProps = {
    question: QuestionType,
    onChange: (formFieldId: string, question: QuestionType) => void
}

export type SingleOptionAnswerComponentProps = {
    question: QuestionType,
    isPreview?: boolean
}

export function SingleOptionAnswerEditable({ question, onChange }: SingleOptionAnswerEditableProps) {
    const options: string[] = question.properties["options"] || [];
    const handleOptionChange = (index: number, value: string) => {
        const editedOptions = [...options];
        editedOptions[index] = value;

        const editedQuestion: QuestionType = {
            ...question,
            "properties": {
                "options": editedOptions
            }
        }
        onChange(question.formFieldId, editedQuestion);
    }

    const handleAddOption = () => {
        const editedOptions = [...options, "New Option"];
        const editedQuestion: QuestionType = {
            ...question,
            "properties": {
                "options": editedOptions
            }
        }
        onChange(question.formFieldId, editedQuestion);
    }


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
                {
                    options.map((option, index) => (
                        <div key={index} className='flex items-center gap-2 w-full px-4'>
                            <Radio disabled color='info' />
                            <ContentEditable
                                placeholder='Option'
                                html={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                className='text-gray-400 focus:outline-none'
                            />
                        </div>
                    ))
                }
                <div className='flex items-center px-6 gap-4 self-start cursor-pointer' onClick={handleAddOption}>
                    <Add color='disabled' />
                    <p className='text-gray-400 py-2 underline'>
                        Add option
                    </p>
                </div>
                

                <div className='flex items-center justify-end w-full px-4 pt-10 gap-1'>
                    <ToggleSwitch id="singleOption" checked={question.required} onChange={() => handleChange("required", !question.required)}/>
                    <IconButton className='m-auto'>
                        <DeleteOutline />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export function SingleOptionAnswerComponent({ question }: SingleOptionAnswerComponentProps) {
    const options = question.properties["options"] as string[];
    return <div className="flex flex-col items-center rounded-xl py-4 cursor-pointer hover:bg-gray-100 m-auto border-black w-full bg-white">
        <div id="form-metadata" className="flex flex-col w-full items-center">
            <div
                className="outline-none hover:bg-gray-100 font-bold rounded-md w-5/6 p-2" >{question.title}
            </div>
            <div
                className="outline-none hover:bg-gray-100 rounded-md text-sm text-gray-400 w-5/6 p-2" >
                {question.description}
            </div>
            {
                    options.map((option, index) => (
                        <div key={index} className='flex items-center gap-2 w-5/6'>
                            <Radio disabled color='info' />
                            <div className='text-gray-400 focus:outline-none'>{option}</div>
                        </div>
                    ))
                }
        </div>
    </div>
}