import { useNavigate } from "react-router-dom";


function LandingPage() {

    const navigate = useNavigate();
    return (
        <div className='flex items-center text-5xl'>
            Landing Page
            <button className="bg-green-500 p-4" onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default LandingPage
