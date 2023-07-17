import { RiSendPlane2Line } from 'react-icons/ri';

function ViewSuccessPage({metadata, imageUrl}: {metadata: Record<string, Record<string, string>>, imageUrl: string}) {
    let successMsg = "Thanks for submitting the form."

    if (metadata && metadata["success_page"] && metadata["success_page"]["msg"]) {
        successMsg = metadata && metadata["success_page"] && metadata["success_page"]["msg"]
    }
    return (
        <div className="flex flex-col items-center self-center rounded-lg p-10 pt-20 min-h-[80%] gap-2 m-auto border-[1px] w-5/6 bg-white">
            <div id="form-metadata" className="flex flex-col w-full items-center gap-2 py-6 px-10">
                <div className="flex flex-row w-full justify-center">
                    <img src={imageUrl} alt="logo3" className='h-20 w-20 rounded-full' />
                </div>
                <div className='font-bold text-3xl text-center'>
                    {successMsg}
                </div>
                <div className="flex w-full justify-center">
                    <button type="submit" className={`bg-black text-white flex items-center gap-2 p-2.5 rounded-xl font-bold px-6  transition duration-200 my-4 mt-20 `}>
                        Try Out FlowForm
                        <RiSendPlane2Line className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewSuccessPage
