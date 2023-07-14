import ContentEditableInput from '../ContentEditableInput'
import ToggleSwitch from '../ToggleSwitch'
import { IconButton } from '@mui/material'
import { DeleteOutline } from '@mui/icons-material'
import { QuestionType } from '../../types/Form'
import Select from '../Select'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export type DateAnswerEditableProps = {
    question: QuestionType,
    onChange: (formFieldId: string, question: QuestionType) => void
}

export type DateAnswerComponentProps = {
    question: QuestionType,
    isPreview?: boolean
}

export function DateAnswerEditable({ question, onChange }: DateAnswerEditableProps) {
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
                <div className="flex w-full">
                     <DatePicker
                        selected= {new Date('2023-07-12')}
                        onChange={()=>{}}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date"
                        value={question.properties["placeholder"]}
                        className='w-5/6 px-4 py-5 my-4 rounded-md border-[1px] text-base border-gray-400 focus:border-gray-800 text-gray-400 focus:outline-none '
                    />
                 </div>
                <div className='flex items-center justify-end w-full px-4 pt-10 gap-1'>
                    <ToggleSwitch id="date" checked={question.required} onChange={() => handleChange("required", !question.required)}/>
                    <IconButton className='m-auto'>
                        <DeleteOutline />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export function DateAnswerComponent({ question }: DateAnswerComponentProps) {
    return <div className="flex flex-col items-center rounded-xl py-4 cursor-pointer hover:bg-gray-100 m-auto border-black w-full bg-white">
        <div id="form-metadata" className="flex flex-col w-full items-center">
            <div
                className="outline-none hover:bg-gray-100 font-bold rounded-md w-5/6 p-2" >{question.title}
            </div>
            <div
                className="outline-none hover:bg-gray-100 rounded-md text-sm text-gray-400 w-5/6 p-2" >
                {question.description}
                <div className="flex w-full">
                    {/* value={question.properties["placeholder"]} />  */}
                    <DatePicker
                        selected= {new Date('2023-07-12')}
                        onChange={()=>{}}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Date"
                        value={question.properties["placeholder"]}
                        className='w-5/6 px-4 py-5 my-4 rounded-md border-[1px] text-base border-gray-400 focus:border-gray-800 text-gray-400 focus:outline-none '
                    />
                </div>
            </div>
        </div>
    </div>
}