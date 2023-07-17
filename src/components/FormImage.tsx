import { useCallback, useRef } from "react";
import { useRecoilState } from "recoil";
import { adminFormAtom } from "../pages/CreateForm";
import { handleUploadFileToIPFS } from "../utils/UploadFileToIpfs";

interface FormImageProps {
}

function isValidUrl(url: string | undefined) {
    // Regular expression for matching a URL
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    
    if (!url) return false
    // Test if the URL matches the regex
    return urlRegex.test(url);
  }

const FormImage: React.FC<FormImageProps> = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [form, setForm] = useRecoilState(adminFormAtom);

    const imageUrl = isValidUrl(form?.backgroundUrl) ? form?.backgroundUrl : "https://assets.deform.cc/default/logo15.png";
    const handlePhotoUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            console.log("file", file)

            try {
                const ipfsImageHash = await handleUploadFileToIPFS(file, new Date().toTimeString())
                console.log(`https://ipfs.io/ipfs/${ipfsImageHash}`)
                const updatedForm = {...form, backgroundUrl: `https://ipfs.io/ipfs/${ipfsImageHash}`, id: form?.id!}
                console.log("updatedForm", updatedForm)
                setForm(updatedForm)
            } catch (error) {
                console.log(error)
            }
        }
    }, [form]);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    // const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    //     event.preventDefault();
    //     const file = event.dataTransfer.files && event.dataTransfer.files[0];
    //     if (file) {
    //         setformImage(file);
    //     }
    // };

    const handleProfileClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="w-full flex items-center" >
            <div
                className="h-20 w-20 bg-white rounded-full relative"
                // onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <div className={`h-20 w-20 rounded-full hover:opacity-80 overflow-hidden cursor-pointer`}>
                    <img
                        src={imageUrl}
                        alt="Profile"
                        className="h-20 w-20 rounded-full"
                        onClick={handleProfileClick}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                />
            </div>
        </div>
    );
};

export default FormImage;