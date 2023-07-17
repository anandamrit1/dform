import * as fcl from '@onflow/fcl'
// import { toast } from 'react-toastify'

export const subscribeTxStatus = (transactionId: string, message?: string) => {
    //const loaderId = toast.loading(message ?? 'Transaction in process...')
    fcl.tx(transactionId).subscribe((res: any) => {
        console.log(res)
        // if (res?.statusString === "SEALED") {
        //     toast.dismiss(loaderId)
        //     if (res?.errorMessage === "") {
        //         toast.success('Transaction sealed')
        //     } else {
        //         toast.error(res?.errorMessage)
        //         // TODO: Throw error from here
        //     }
        // } else if (res?.statusString === "EXECUTED") {
        //     toast.success('Transaction executed')
        // } else if (res?.statusString === "PENDING") {
        //     toast.success('Transaction pending')
        // } else if (res?.statusString === "EXPIRED") {
        //     toast.error('Transaction expired')
        // }
    })
}