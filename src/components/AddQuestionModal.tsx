import { CheckBox, Email, FileUpload, RadioButtonChecked, ShortText, AccountBalanceWallet, Twitter } from '@mui/icons-material';
import NotesIcon from '@mui/icons-material/Notes';

export type AddQuestionModalProps = {
    handleClose: () => void,
    handleAddQuestion: (type: string) => void,
}

function AddQuestionModal({ handleAddQuestion }: AddQuestionModalProps) {
    const questionTypes = [
        {
            type: 'shortAnswer',
            label: <><span className='mr-2'><ShortText /></span>Short Answer</>,
            description: 'For short answers',
        },
        {
            type: 'longAnswer',
            label: <><span className='mr-2'><NotesIcon /></span>Long Answer</>,
            description: 'For long answers',
        },
        {
            type: 'singleOption',
            label: <><span className='mr-2'><RadioButtonChecked /></span>Single Select</>,
            description: 'For single option',
        },
        {
            type: 'multipleOption',
            label: <><span className='mr-2'><CheckBox /></span>Multiple Select</>,
            description: 'For multiple option',
        },
        {
            type: 'email',
            label: <><span className='mr-2'><Email /></span>Email</>,
            description: 'For email',
        },
        {
            type: 'upload',
            label: <><span className='mr-2'><FileUpload /></span>File Upload</>,
            description: 'For file upload',
        },
        {
            type: 'walletConnect',
            label: <><span className='mr-2'><AccountBalanceWallet /></span>Connect Wallet</>,
            description: 'For verifying wallet address',
        },
        {
            type: 'twitter',
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
                    questionTypes.map((questionType) => (
                        <button onClick={() => handleAddQuestion(questionType.type)} className="hover:bg-gray-100 text-black py-3 px-6 rounded-lg cursor-pointer my-2 w-full text-left">{questionType.label}</button>
                    ))
                }
                </div>
            </div> 
        </div> 
    </div>
  )
}

export default AddQuestionModal
