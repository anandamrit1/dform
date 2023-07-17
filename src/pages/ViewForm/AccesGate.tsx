import { AccountBalanceWallet } from '@mui/icons-material'
import { useEffect } from 'react'
import * as fcl from '@onflow/fcl';
import { verificationStatus } from '.';
import { useAxios } from '../../utils/axios';
import { FaTwitter } from 'react-icons/fa';
import axios from 'axios';


type AccesGateProps = {
    user: { loggedIn: boolean, addr?: string },
    imageUrl: string,
    accessGateNft?: string,
    accessGateContract?: string,
    accessGateTwitter?: string,
    accessGateFind?: string,
    verified: verificationStatus,
    setVerified: (verified: verificationStatus) => void
}

function AccesGate({ user, imageUrl, accessGateNft, accessGateContract, accessGateFind, accessGateTwitter, verified, setVerified}: AccesGateProps) {
    const apiClient = useAxios();

    const connectMsg = accessGateNft || accessGateContract ? <>Connect your Flow wallet</> :
                accessGateTwitter ? <>Connect your Twitter account</> : <></>

    const requirementMsg = accessGateNft ? <>Owns a NFT from collection path: <b>{accessGateNft}</b></> :
                accessGateContract ? <>Deployed a Contract: <b>{accessGateContract}</b></> :
                accessGateFind ? <>Owns a <b>.find</b> profile</> : 
                accessGateTwitter ? <>Follows <b>{accessGateTwitter}</b> on Twitter</> : <></>
    const deniedMsg = accessGateNft ? <>You don't own a NFT from collection path: <b>{accessGateNft}</b></> :
                accessGateContract ? <>You haven't deployed any Contract on Flow</> : 
                accessGateFind ? <>You don't own a <b>.find</b> profile</> :
                accessGateTwitter ? <>You dont't follow <b>{accessGateTwitter}</b> on Twitter</> : <></>
                
    useEffect(() => {
        const checkAccessGateNft = async (address: string) => {
            try {
                const res = await axios.get(`http://localhost:5000/script/getNfts?address=${address}&publicPath=${accessGateNft}`)
                const data = await res.data
                if (data.length > 0) {
                    setVerified("VERIFIED")
                } else {
                    setVerified("REJECTED")
                }
            } catch (error) {
                setVerified("REJECTED")
                console.log(error)
            }
         }

         const checkAccessGateContract = async (address: string) => {
            try {
                const res = await axios.get(`http://localhost:5000/script/getContracts?address=${address}`)
                const data = await res.data
                if (data && data.length > 0) {
                    setVerified("VERIFIED")
                } else {
                    setVerified("REJECTED")
                }
            } catch (error) {
                setVerified("REJECTED")
                console.log(error)
            }
         }

         const checkAccessGateFind = async (address: string) => {
            try {
                const res = await axios.get(`http://localhost:5000/script/getFindProfile?address=${address}`)
                const data = await res.data
                console.log(data)
                if (data) {
                    setVerified("VERIFIED")
                } else {
                    setVerified("REJECTED")
                }
            } catch (error) {
                setVerified("REJECTED")
                console.log(error)
            }
         }

        if (user?.loggedIn && verified) {
            setVerified("LOADING")
            if (accessGateNft) {
                checkAccessGateNft(user.addr || "")
            } else if (accessGateContract) {
                checkAccessGateContract(user.addr || "")
            } else if (accessGateFind) {
                checkAccessGateFind(user.addr || "")
            }
        }
    }, [user])

    const handleLogin = async () => {
        try {
            if (accessGateNft || accessGateContract || accessGateFind) {
                await fcl.authenticate()
            } else if (accessGateTwitter) {
                window.open("http://localhost:5000/responder-auth/twitter")
                // const res = await apiClient.get(`/responder-auth/twitter`)
                // const data = await res.data
                // console.log(data)
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
                    <img src={imageUrl} alt="Google Forms" className="w-16 h-16 rounded-full" />
                    <div className='text-2xl py-6 font-semibold'>Please verify your identity</div>
                    {
                        user.loggedIn ? 
                        <div className='text-sm my-2'>Connected as: <b>{user.addr}</b></div>
                        : 
                        <>
                            <div>{connectMsg}</div>
                            {
                                accessGateTwitter ? 
                                <div onClick={handleLogin} className={`border min-w-[190px] w-[190px] bg-blue-500 cursor-pointer hover:opacity-80 p-3 rounded-lg outline-none transition duration-200`}>
                                    <div className="font-semibold flex items-center space-x-2 justify-center text-white">
                                        <FaTwitter className="h-6 w-6"/>
                                        <div>Connect Twitter</div>
                                    </div>
                                </div>
                                : <div onClick={handleLogin} className="border-[1px] border-black rounded-lg w-52 px-2 py-3 my-3 cursor-pointer self-start" >
                                    <span className='mr-2'><AccountBalanceWallet /></span>Connect Wallet
                                </div>
                            }
                        </>
                    }
                    <hr className='w-full my-2' />
                    <div className='text-sm my-4'>To view this form, you must satisfy the requirements below.</div>

                    <div className='mt-6'>{requirementMsg}</div>
                    <div className='text-sm font-medium  w-full my-2'>
                        {
                            verified === "NOT_CONNECTED" ?
                                <div className='bg-gray-300 px-4 py-1 rounded-lg'>Login to verify</div>
                                : verified === "LOADING" ?
                                    <div className='bg-yellow-300 px-4 py-1 rounded-lg'>Verifying...</div>
                                    : verified === "VERIFIED" ?
                                        <div className='bg-green-400 px-4 py-1 rounded-lg'>Verified</div>
                                        : <div className='bg-red-400 px-4 py-1 rounded-lg'>{deniedMsg}</div>        
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccesGate
