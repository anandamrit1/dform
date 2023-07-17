import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { adminFormAtom } from '.'
import ContentEditableInput from '../../components/ContentEditableInput';
import Skeleton from 'react-loading-skeleton';

function SuccessPage() {
    const [form, setForm] = useRecoilState(adminFormAtom);
    const [successMsg, setSuccessMsg] = useState("Thanks for submitting the form.")

    const imageUrl = form?.backgroundUrl ?? "https://assets.deform.cc/default/bg1.jpg"
    useEffect(() => {
        console.log("hello")
        if (form && form?.metadata && form.metadata["success_page"] && form.metadata["success_page"]["msg"]) {
            setSuccessMsg(form.metadata["success_page"]["msg"])
        }
    }, [form])

    const handleUpdateForm = useCallback((key: string, value: string) => {
        const metadata = form?.metadata ?? {}
        const successPageMetadata = metadata["success_page"] ? metadata["success_page"] : {}
        const updatedMetadata = {...metadata, "success_page": {...successPageMetadata, [key]: value}}
        console.log(updatedMetadata)
        setForm((o) => ({ ...o, metadata: updatedMetadata, id: o!.id }))
    }, [form])

    return (
        <div className="flex flex-col items-center rounded-lg p-10 pt-20 min-h-[80%] gap-2 m-auto border-[1px] border-black lg:w-1/2 w-5/6 bg-white">
            {
                form != undefined ?
                    <>
                        <div id="form-metadata" className="flex flex-col w-full items-center gap-2 py-6 px-10">
                            <div className="flex flex-row w-full justify-center">
                                <img src={imageUrl} alt="logo3" className='h-20 w-20 rounded-full' />
                            </div>
                            <ContentEditableInput
                                placeholder='Form Title'
                                value={successMsg}
                                onChange={(value) => handleUpdateForm("msg", value)}
                                className='font-bold text-2xl text-center'
                            />
                        </div>
                    </>
                    : <Skeleton style={{width: "100%", height: "40px"}}/>
                }
        </div>
    )
}

export default SuccessPage
