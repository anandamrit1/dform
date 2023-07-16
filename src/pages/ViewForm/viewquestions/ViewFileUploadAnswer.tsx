import { QuestionType } from '../../../types/Form'
import { useFormikContext} from 'formik';
import {  Field, ErrorMessage } from 'formik';
import  { useRef,useState  } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';


const ViewUploadFileAnswer = ({ question, themeColor }: { question: QuestionType; themeColor: string }) => {

    const required = question.required;
    
    const { setFieldValue } = useFormikContext();

    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
    const handleDrop = (acceptedFiles: File[]) => {
      setSelectedFile(acceptedFiles[0]);
      setFieldValue(question.formFieldId, acceptedFiles[0]); // Update formik field value
    };

    const handleDeleteFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setSelectedFile(null);
        setFieldValue(question.formFieldId, null); // Clear formik field value
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

    return (
        <div className="flex flex-col w-full my-6 justify-center space-y-2">
            <div className='font-semibold' >
                {question.title}
                {required && <span className="text-xl text-red-500"> *</span>}
            </div>
            <div className='text-gray-400 pb-4' >{question.description}</div>
            <div className={`relative ${selectedFile ? ' ' : 'cursor-pointer'} hover:bg-${themeColor}-100 `}>
                <div
                    {...getRootProps()} className={`border-dashed border text-center flex items-center justify-center border-gray-400 p-4 sm:p-10 rounded-lg outline-none transition duration-200 ${isDragActive ? `border-${themeColor}-500` : '' }`} >
                    <Field name={question.formFieldId}>
                        {() => (
                            <>
                                <input {...getInputProps()} ref={fileInputRef} className="hidden" />
                                {selectedFile ? (
                                    <div className="flex items-center">
                                        <p>{selectedFile.name}</p>
                                        <button onClick={handleDeleteFile} className="ml-2 text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" >
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <div className='flex items-center justify-center'>
                                        <FiUpload className="w-5 h-5 mr-2" />
                                        <div>Click to choose a file or drag here </div>
                                    </div>
                                )}
                            </>
                        )}
                    </Field>
                </div>
            </div>

            <div className="flex justify-start w-full">
                <ErrorMessage name={question.formFieldId}>
                    {(msg: string) => (
                        <div className={`text-red-500 text-sm`}>
                            {msg}
                        </div>
                    )}
                </ErrorMessage>
            </div>
        </div>
    )
}

export default ViewUploadFileAnswer