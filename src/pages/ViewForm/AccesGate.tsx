import { AccountBalanceWallet } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import * as fcl from '@onflow/fcl';
import { AccessGateNft, verificationStatus } from '.';
import { RiSendPlane2Line } from 'react-icons/ri';
import classNames from 'classnames';


type AccesGateProps = {
    user: { loggedIn: boolean, addr?: string },
    accessGateNft?: AccessGateNft,
    verified: verificationStatus,
    setVerified: (verified: verificationStatus) => void
}

function AccesGate({ user, accessGateNft, verified, setVerified}: AccesGateProps) {

    useEffect(() => {
        if (user?.loggedIn && verified) {
            setVerified("LOADING")
            setTimeout(() => {
                setVerified("REJECTED")
            }, 8000)
        }
    }, [user])

    const handleLogin = async () => {
        try {
            if (accessGateNft?.address) {
                await fcl.authenticate()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="absolute top-0 left-0 w-screen h-screen bg-gray-600 opacity-50"
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[760px] flex-col items-start gap-y-8 rounded-xl bg-white py-10 px-5 sm:px-10">
                <div className="flex flex-col px-8 pt-8">
                    <img src="https://assets.deform.cc/default/logo5.png" alt="Google Forms" className="w-16 h-16 rounded-full" />
                    <div className='text-2xl py-6 font-semibold'>Please verify your identity</div>
                    {
                        user.loggedIn ? 
                        <div className='text-sm my-2'>Connected as: <b>{user.addr}</b></div>
                        : 
                        <>
                            <div>Please connect your wallet</div>
                            <div onClick={handleLogin} className="border-[1px] border-black rounded-lg w-52 px-2 py-3 my-3 cursor-pointer self-start" >
                                <span className='mr-2'><AccountBalanceWallet /></span>Connect Wallet
                            </div>
                        </>
                    }
                    <hr className='w-full my-2' />
                    <div className='text-sm my-4'>To view this form, you must satisfy the requirements below.</div>

                    <div className='mt-6'>Owns a NFT from collection: <b>{accessGateNft?.address}</b></div>
                    <div className='text-sm w-60 my-2'>
                        {
                            verified === "NOT_CONNECTED" ?
                                <div className='bg-gray-300 px-2 py-1 rounded-2xl'>Connect Wallet to verify</div>
                                : verified === "LOADING" ?
                                    <div className='bg-yellow-300 px-2 py-1 rounded-2xl'>Verifying...</div>
                                    : verified === "VERIFIED" ?
                                        <div className='bg-green-400 px-2 py-1 rounded-2xl'>Verified</div>
                                        : <div className='bg-red-400 px-2 py-1 rounded-2xl'>You do not own the required NFT</div>        
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccesGate
