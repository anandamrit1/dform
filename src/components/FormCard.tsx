import { useState, useEffect, useRef, useCallback } from 'react'
import { HiOutlineTrash, HiOutlineLink } from 'react-icons/hi';
import { Form } from '../types/Form';

type FormCardProps = {
    form: Form;
    onDelete: () => void;
    onClick: () => void;
}

const FormCard = ({ form, onDelete, onClick}: FormCardProps) => {

    const [isLinkCopied, setIsLinkCopied] = useState(false);
    const copyLinkRef = useRef<HTMLDivElement>(null);
    const imageUrl = form?.backgroundUrl ?? "https://assets.deform.cc/default/logo15.png";
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
        const confirmed = window.confirm(`Are you sure you want to delete "${form.description}" and all it's responses?`);
        if (confirmed) {
            onDelete();
        }
    };

    const handleCopyLink = () => {
        const textToCopy = `http://localhost:5173/form/${form.id}`;
        navigator.clipboard.writeText(textToCopy);
        setIsLinkCopied(true);
    };

    const themeColor = "red";
    return (
        <div className='h-[302px] w-[250px] bg-white border rounded-3xl shadow-lg  hover:opacity-80 transition duration-200'>
            <div className={`flex justify-center items-center h-[210px] w-[248px] bg-gradient-to-br from-white via-${form.backgroundColor}-200  to-white rounded-t-3xl cursor-pointer`}  onClick={onClick}>
                <img src={imageUrl} alt="logo3" className='h-24 w-24 rounded-full' />
            </div>
            <div className='w-full h-[80px] flex flex-row justify-between px-6 items-center cursor-pointer'>
                <div className="flex flex-col space-y-1 justify-center"  onClick={onClick}>
                    <div>{form?.description!.length > 18 ? form?.description!.substring(0, 16) + "..." : form.description}</div>
                    {
                        form?.isPublished ?
                        <div className='bg-green-200 py-1 px-4 text-xs font-bold rounded-full'>Published</div> :
                        <div className='bg-yellow-200 py-1 px-4 text-xs font-bold rounded-full'>Draft</div>
                    }
                </div>
                <div className='flex justify-center items-center' >
                    <div ref={copyLinkRef} className={`p-2 rounded-full cursor-pointer ${isLinkCopied ? 'text-gray-600' : `hover:bg-green-200` }`} onClick={handleCopyLink}> <HiOutlineLink size={18} /> </div>
                    <div className='hover:bg-red-100 p-2 hover:text-red-500 rounded-full cursor-pointer' onClick={handleDeleteClick}> <HiOutlineTrash size={18} /> </div>
                </div>
            </div>
        </div>
    )
}

export default FormCard;