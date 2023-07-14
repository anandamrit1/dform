import { AccountBalanceWallet } from '@mui/icons-material'

function AccesGate() {
    return (
        <div>
            <div className="absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[760px] flex-col items-start gap-y-8 rounded-xl bg-white py-10 px-5 sm:px-10">
                <div className="flex flex-col p-8">
                    <img src="https://assets.deform.cc/default/logo5.png" alt="Google Forms" className="w-16 h-16 rounded-full" />
                    <div className='text-4xl py-6 font-semibold'>Please verify your identity</div>
                    <div>Please connect your wallet</div>
                    <div className="border-[1px] border-black rounded-lg w-52 px-2 py-3 my-3 self-start" >
                        <span className='mr-2'><AccountBalanceWallet /></span>Connect Wallet
                    </div>
                    <hr className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default AccesGate
