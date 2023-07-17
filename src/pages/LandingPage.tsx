import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { subscribeTxStatus } from "../utils/subscribeTxStatus";
import { publishFlowForm } from "../flow/transactions";

function LandingPage() {
      const check = async() => {
        const transactionId = await publishFlowForm({
                name: "test-name-2",
                data: "test-name-2",
                description: "test-name-2",
                formId: "test-name-2",
                image: "test-name-2"
            })
            console.log("Transaction ID: ", transactionId)
            subscribeTxStatus(transactionId)
      }

    const performLoginChecks = async () => {
        try {
          const client = axios.create({
            baseURL: "http://localhost:5000",
            withCredentials: true,
          });
    
          const res = await client.get("/auth/user");
          console.log("Fetching user", res.data, res.status);
        } catch (e) {
          console.log("Fetching User Login Error: ", e);
        }
      };
    
      useEffect(() => {
        performLoginChecks()
      },[])

    const navigate = useNavigate();
    return (
        <div className='flex gap-y-4 p-10 text-5xl flex-col w-96'>
            Landing Page
            <button className="bg-green-500 p-4" onClick={() => navigate('/login')}>Login</button>
            <button className="bg-red-500 p-4" onClick={check}>Verify After Login Only</button>
        </div>
    )
}

export default LandingPage
