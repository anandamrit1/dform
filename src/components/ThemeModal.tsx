import { IoMdCheckmark } from 'react-icons/io';
import { useState } from "react";
import { useRecoilState } from 'recoil';
import { adminFormAtom } from '../pages/CreateForm';

export type ThemeModalProps = {
    onClose: () => void
}

const colors = [
    { name: "red", hex: "#ff3b30" },
    { name: "pink", hex: "#ff2d55" },
    { name: "orange", hex: "#ff9500" },
    { name: "yellow", hex: "#fc0" },
    { name: "green", hex: "#34c759" },
    { name: "teal", hex: "#5ac8fa" },
    { name: "blue", hex: "#007aff" },
    { name: "indigo", hex: "#5854d6" },
    { name: "purple", hex: "#af52de" },
];

function ThemeModal({ onClose }: ThemeModalProps) {
    const [form, setForm] = useRecoilState(adminFormAtom);

    const color = form?.backgroundColor ?? "green";

    const handleColorChange = (color: string) => {
        setForm((prev) => ({
            ...prev!,
            backgroundColor: color,
            id: prev?.id!,
        }))
        onClose();
    }
    
    return (
        <div className="bg-gray-100 w-[540px] mx-4 p-4 rounded-xl">
            <div className="flex justify-center flex-col items-center border-b border-gray-200 py-3" >
                <div className="flex w-full px-5 items-center justify-between">
                    <p className="text-xl font-bold text-gray-800">Theme Picker</p>
                    <div onClick={onClose} className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full" > X </div>
                </div>
            </div>
            <div className="h-16 w-full bg-gray-100 flex items-center justify-center rounded-b-lg mt-4 ">
                    <div className="flex items-center w-full p-2 bg-gray-200 rounded-lg">
                        {colors.map((clr, index) => (
                            <div
                                key={clr.hex}
                                className={`w-full h-9 m-0.5 cursor-pointer ${index === 0 ? "rounded-l-md" : ""} ${index === colors.length - 1 ? "rounded-r-md" : ""}`}
                                style={{ backgroundColor: clr.hex }}
                                onClick={() => handleColorChange(clr.name)}
                            >
                                {color === clr.name && (
                                    <IoMdCheckmark className="w-6 h-6 text-white mx-auto mt-1.5" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default ThemeModal
