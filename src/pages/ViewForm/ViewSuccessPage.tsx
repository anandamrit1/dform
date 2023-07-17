import React, { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import ContentEditableInput from '../../components/ContentEditableInput';
import Skeleton from 'react-loading-skeleton';
import { Form } from '../../types/Form';

function ViewSuccessPage({metadata}: {metadata: Record<string, Record<string, string>>}) {
    let successMsg = "Thanks for submitting the form."

    if (metadata && metadata["success_page"] && metadata["success_page"]["msg"]) {
        successMsg = metadata && metadata["success_page"] && metadata["success_page"]["msg"]
    }
    return (
        <div className="flex flex-col items-center rounded-lg p-10 pt-20 min-h-[80%] gap-2 m-auto border-[1px] w-5/6 bg-white">
            <div id="form-metadata" className="flex flex-col w-full items-center gap-2 py-6 px-10">
                <div className="flex flex-row w-full justify-center">
                    <img src={"https://assets.deform.cc/default/logo15.png"} alt="logo3" className='h-20 w-20 rounded-full' />
                </div>
                <div className='font-bold text-3xl text-center'>
                    {successMsg}
                </div>
            </div>
        </div>
    )
}

export default ViewSuccessPage
