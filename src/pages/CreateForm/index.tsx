import { IconButton } from "@mui/material"
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Palette, Share, Visibility } from "@mui/icons-material";

import QuestionsList from "./QuestionList";
import ContentEditableInput from "../../components/ContentEditableInputWithState";


function CreateForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className=" h-screen flex flex-col items-center">
            <div className="border-b-2 shadow-[0_4px_24px_rgba(0,0,0,0.1)] w-screen bg-white py-10 flex justify-between">
                <div className="flex gap-6 px-8">
                    <IconButton
                        size="medium"
                        aria-label="back"
                    >
                        <ArrowBackIosIcon />
                    </IconButton>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Untitled Form"
                        className="box-border border-b-2 border-white h-8 focus:outline-none focus:border-b-2 focus:border-blue-500 px-2 py-2" />
                </div>
                <div className="flex gap-4 px-8">
                    <IconButton
                        size="medium"
                        aria-label="back"
                    >
                        <Palette />
                    </IconButton>
                    <IconButton
                        size="medium"
                        aria-label="back"
                    >
                        <Visibility />
                    </IconButton>
                    <IconButton
                        size="medium"
                        aria-label="back"
                    >
                        <Share />
                    </IconButton>
                </div>
            </div>
            <div className="flex-grow overflow-y-auto w-screen py-24">
                <div className="flex flex-col items-center rounded-lg p-10 min-h-[80%] gap-2 m-auto border-[1px] border-black lg:w-1/2 w-5/6 bg-white">
                    <div id="form-metadata" className="flex flex-col w-full items-center gap-2 py-6 px-10">
                            <ContentEditableInput
                                placeholder='Form Title'
                                value={title}
                                onChange={(value) => setTitle(value)}
                                className='font-bold text-2xl'
                            />
                            <ContentEditableInput
                                placeholder='Form Description'
                                value={description}
                                onChange={(value) => setDescription(value)}
                                className=''
                            />
                    </div>

                    <QuestionsList />
                    <p className="m-auto mt-8">
                        Powered by <span className="font-bold cursor-pointer">TaleFlow</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CreateForm
