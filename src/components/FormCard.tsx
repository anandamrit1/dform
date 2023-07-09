import { useState, useEffect, useRef } from 'react'
import { HiOutlineTrash, HiOutlineLink } from 'react-icons/hi';
export type FormType = {
    title: string;
    coverImg: string;
    response: number;
    id: string;
}

type FormCardProps = {
    form: FormType;
    onDelete: () => void;
    onClick: () => void;
}

const FormCard = ({ form, onDelete, onClick}: FormCardProps) => {

    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const copyLinkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (copyLinkRef.current && !copyLinkRef.current.contains(event.target as Node)) {
            setIsLinkCopied(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    const handleDeleteClick = () => {
        const confirmed = window.confirm(`Are you sure you want to delete "${form.title}" and all it's responses?`);
        if (confirmed) {
            onDelete();
        }
    };

    const handleCopyLink = () => {
        const textToCopy = 'Linkt to the form';
        navigator.clipboard.writeText(textToCopy);
        setIsLinkCopied(true);
        console.log("Link Copied...");
    };


    return (
        <div className='h-[302px] w-[250px] bg-white border rounded-3xl shadow-lg  hover:opacity-80 transition duration-200'>
            <div className='flex justify-center items-center h-[210px] w-[248px] bg-gradient-to-br from-indigo-400  to-white rounded-t-3xl cursor-pointer' onClick={onClick}>
                <img src={form.coverImg} alt="logo3" className='h-24 w-24 rounded-full' />
            </div>
            <div className='w-full h-[80px] flex flex-row justify-between px-6 items-center'>
                <div className="flex flex-col space-y-1 justify-center">
                    <div>{form.title.length > 18 ? form.title.substring(0, 16) + "..." : form.title}</div>
                    <div className='text-gray-400'>{form.response > 0 ? form.response : "No"} responses</div>
                </div>
                <div className='flex justify-center items-center' >
                    <div ref={copyLinkRef} className={`p-2 rounded-full cursor-pointer ${isLinkCopied ? 'text-gray-600' : 'hover:bg-indigo-100' }`} onClick={handleCopyLink}> <HiOutlineLink size={18} /> </div>
                    <div className='hover:bg-red-100 p-2 hover:text-red-500 rounded-full cursor-pointer' onClick={handleDeleteClick}> <HiOutlineTrash size={18} /> </div>
                </div>
            </div>
        </div>
    )
}

export default FormCard;