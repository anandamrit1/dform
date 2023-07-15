import { CheckBox, Email, FileUpload, RadioButtonChecked, ShortText, AccountBalanceWallet, Twitter, DateRange } from '@mui/icons-material';
import NotesIcon from '@mui/icons-material/Notes';
import { Link } from '@mui/icons-material';
import { FaHashtag } from 'react-icons/fa';
import { FieldType } from '../types/Form';


export type AddQuestionModalProps = {
    handleClose: () => void,
    handleAddQuestion: (type: FieldType) => void,
}

type NewQuestionType = {
    type: FieldType;
    label: JSX.Element;
    description: string;
}

function AddQuestionModal({ handleAddQuestion }: AddQuestionModalProps) {
    const FormFields: NewQuestionType[] = [
        {
            type: 'ShortText',
            label: <><span className='mr-2'><ShortText /></span>Short Answer</>,
            description: 'For short answers',
        },
        {
            type: 'LongText',
            label: <><span className='mr-2'><NotesIcon /></span>Long Answer</>,
            description: 'For long answers',
        },
        {
            type: 'MultipleChoice',
            label: <><span className='mr-2'><RadioButtonChecked /></span>Single Select</>,
            description: 'For single option',
        },
        {
            type: 'MultipleChoice',
            label: <><span className='mr-2'><CheckBox /></span>Multiple Select</>,
            description: 'For multiple option',
        },
        {
            type: 'email',
            label: <><span className='mr-2'><Email /></span>Email</>,
            description: 'For email',
        },
        {
            type: 'link',
            label: <><span className='mr-2'><Link /></span>Link</>,
            description: 'For link',
        },
        {
            type: 'Number',
            label: <><span className='mr-2 '><FaHashtag className="inline-block"  /></span>Number</>,
            description: 'For Number',
        },
        {
            type: 'Date',
            label: <><span className='mr-2 '><DateRange /></span>Date</>,
            description: 'For Date',
        },
        {
            type: 'Upload',
            label: <><span className='mr-2'><FileUpload /></span>File Upload</>,
            description: 'For file Upload',
        },
        {
            type: 'FlowAddress',
            label: <><span className='mr-2'><AccountBalanceWallet /></span>Connect Wallet</>,
            description: 'For verifying wallet address',
        },
        {
            type: 'TwitterAccount',
            label: <><span className='mr-2 text-[#1da1f2]'><Twitter /></span>Connect Twitter</>,
            description: 'For verifying wallet address',
        }
    ];

  return (
    <div>
        <div className="flex flex-col items-center justify-center bg-white rounded-lg border-[1px] shadow-[0_4px_24px_rgba(0,0,0,0.1)] z-10">
            <div className="flex flex-col bg-white-100 rounded-lg w-96 md:h-[50vh] h-[80vh] p-6">
                <p className="text-xl">Add new Question</p>
                <hr className='wf-full'/>
                <div className="flex flex-col w-full h-full py-6 overflow-y-scroll">
                {
                    FormFields.map((FormField) => (
                        <button onClick={() => handleAddQuestion(FormField.type)} className="hover:bg-gray-100 text-black py-3 px-6 rounded-lg cursor-pointer my-2 w-full text-left">{FormField.label}</button>
                    ))
                }
                </div>
            </div> 
        </div> 
    </div>
  )
}

export default AddQuestionModal
