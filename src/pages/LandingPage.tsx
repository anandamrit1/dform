import { useNavigate } from "react-router-dom";
import logo from './../Images/logo.webp'
import accessGating from './../Images/accessGating.png'
import accessGateWorking from './../Images/accessgateworking.png'
import powerfulQuestions from './../Images/powerfulQuestions.png'
import blockchainFilter from './../Images/blockchainFilter.png'
import brandCustomisation from './../Images/brandCustomisation.png'
import { useState } from "react";

{/* <button className="bg-green-500 p-4" onClick={() => navigate('/login')}>Login</button> */}



function LandingPage() {
    const navigate = useNavigate();
    return (
        <div className='w-full  flex flex-col items-center'>
            <Navbar/>
            <div className=" bg-gradient-to-b from-red-300 bg-opacity-80 w-full h-screen flex flex-col justify-center items-center" >
                <div className="text-8xl font-bold mt-32" >DeForm </div>
                <div className="text-6xl font-bold mt-6">Web3 Forms & Surveys</div>
                <div className="mt-12 flex flex-wrap max-w-[580px] justify-center items-center text-center text-xl text-gray-500"> The most powerful survey creation tool that helps you identify your audience and understand your community with ease.</div>
                <div className="py-3 bg-black text-white flex justify-center items-center mt-12 rounded-full px-14 text-lg font-semibold cursor-pointer hover:opacity-80 transition duration-300" onClick={() => navigate('/login')} > Get Started for free</div>
            </div>
            <FeaturesComp/>
            <FAQComp/>
            
        </div>
    )
}

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex items-center fixed top-0 left-0 w-10/12 mx-24 justify-between bg-white py-5 px-10 mt-10 rounded-full shadow-lg border z-10">
            <div className="flex">
            <div className="flex justify-center items-center space-x-1 mr-6 ">
                <img src={logo} alt="logo" className="w-6 h-6" />
                <div className="font-bold text-lg">Deform</div>
            </div>
            <ul className="flex space-x-4 justify-center items-center">
                <li className="p-2 px-6 transition duration-300 cursor-pointer hover:bg-[#f6e49b] rounded-full">
                    <a href="#features" className="text-gray-800 text-lg font-semibold">Features</a>
                </li>
                <li className="p-2 px-6 transition duration-300 cursor-pointer hover:bg-[#f6e49b] rounded-full">
                    <a href="#pricing" className="text-gray-800 text-lg font-semibold">Pricing</a>
                </li>
                <li className="p-2 px-6 transition duration-300 cursor-pointer hover:bg-[#f6e49b] rounded-full">
                    <a href="#faq" className="text-gray-800 text-lg font-semibold">FAQ</a>
                </li>
                <li className="p-2 px-6 transition duration-300 cursor-pointer hover:bg-[#f6e49b] rounded-full">
                    <a href="#docs" className="text-gray-800 text-lg font-semibold">Docs</a>
                </li>
                <li className="p-2 px-6 transition duration-300 cursor-pointer hover:bg-[#f6e49b] rounded-full">
                    <a href="#roadmap" className="text-gray-800 text-lg font-semibold">Roadmap</a>
                </li>

            </ul>
            </div>
            
            <div className="flex items-center justify-center " onClick={() => navigate('/login')} >
                <div className="font-semibold hover:text-black hover:bg-gray-200 text-white bg-black p-2 px-7 rounded-full transition duration-300 cursor-pointer">
                    SIGN IN
                </div>
            </div>
        </nav>
    )
};

const FeaturesComp = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="text-7xl font-bold my-24" >Features You'll Love</div>

            <div className="w-11/12 bg-indigo-100 bg-opacity-70 rounded-3xl flex flex-col justify-center items-center pb-3">
                <div className="flex justify-center items-center space-x-3 my-10">
                    <div> <img src={accessGating} alt="accessGating" className="w-12 h-12 p-2 rounded-full bg-blue-200" /> </div>
                    <div className="flex items-center justify-center border-b-8 pb-1 border-blue-400 text-3xl font-bold"> Access gating </div>
                </div>
                <div className="flex justify-center space-x-10 items-center w-full px-3">
                    <div className=" items-center justify-center text-3xl font-bold max-w-lg text-center">
                        <span className="opacity-80" > Gather responses from </span>
                        <span className="border-b-8 border-blue-400 "> verified </span>
                        <span className="opacity-80">community members with token-gated form questions.</span>
                    </div>
                    <div>
                        <img src={accessGateWorking} alt="accessGateWorking" className="w-[500px]" />
                    </div>
                </div>
            </div>

            <div className="h-12"></div>

            <div className="w-11/12 bg-yellow-100 bg-opacity-70 rounded-3xl flex flex-col justify-center items-center pb-3">
                <div className="flex justify-center items-center space-x-3 my-10">
                    <div> <img src={accessGating} alt="accessGating" className="w-12 h-12 p-2 rounded-full bg-yellow-200" /> </div>
                    <div className="flex items-center justify-center border-b-8 pb-1 border-yellow-400 text-3xl font-bold"> Powerful questions </div>
                </div>
                <div className="flex justify-center space-x-10 items-center w-full px-3">
                    <div>
                        <img src={powerfulQuestions} alt="powerfulQuestions" className="w-[500px]" />
                    </div>
                    <div className=" items-center justify-center text-3xl font-bold max-w-lg text-center">
                        <span className="opacity-80" > Survey crypto networks using </span>
                        <span className="border-b-8 border-yellow-400 "> powerful  </span>
                        <span className="opacity-80">question types.</span>
                    </div>
                </div>
            </div>

            <div className="h-12"></div>

            <div className="w-11/12 bg-green-100 bg-opacity-70 rounded-3xl flex flex-col justify-center items-center pb-3">
                <div className="flex justify-center items-center space-x-3 my-10">
                    <div> <img src={accessGating} alt="accessGating" className="w-12 h-12 p-2 rounded-full bg-green-200" /> </div>
                    <div className="flex items-center justify-center border-b-8 pb-1 border-green-400 text-3xl font-bold"> Blockchain filters </div>
                </div>
                <div className="flex justify-center space-x-10 items-center w-full px-3">
                    <div>
                        <img src={blockchainFilter} alt="blockchainFilter" className="w-[500px]" />
                    </div>
                    <div className=" items-center justify-center text-3xl font-bold max-w-md text-center">
                        <span className="opacity-80" > Understand your </span>
                        <span className="border-b-8 border-green-400 "> community </span>
                        <span className="opacity-80">in a whole new way.</span>
                    </div>
                </div>
            </div>

            <div className="h-12"></div>

            <div className="w-11/12 bg-red-100 bg-opacity-70 rounded-3xl flex flex-col justify-center items-center pb-3">
                <div className="flex justify-center items-center space-x-3 my-10">
                    <div> <img src={accessGating} alt="accessGating" className="w-12 h-12 p-2 rounded-full bg-red-200" /> </div>
                    <div className="flex items-center justify-center border-b-8 pb-1 border-red-400 text-3xl font-bold"> Brand customization </div>
                </div>
                <div className="flex justify-center space-x-10 items-center w-full px-3">
                    <div className=" items-center justify-center text-3xl font-bold max-w-sm text-center">
                        <span className="opacity-80" > Elevate your </span>
                        <span className="border-b-8 border-red-400 "> brand </span>
                        <span className="opacity-80">customize your survey, grow your DAO.</span>
                    </div>
                    <div>
                        <img src={brandCustomisation} alt="brandCustomisation" className="w-[500px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}


const FAQComp = () => {
    return (
        <section className="py-24 lg:py-32 bg-white overflow-hidden px-12">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -m-8">
                    <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
                    <span className="inline-block max-w-max mb-6 px-3 py-1.5 text-sm text-white uppercase tracking-tight font-semibold bg-gray-600 rounded-full" style={{ background: "url('basko-assets/images/gradient.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', }}>Try some freebie</span>
                        <h2 className="font-heading text-6xl tracking-tighter text-center">Frequently Asked Questions</h2>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <div className="flex flex-wrap -m-1.5">
                            <div className="w-full p-1.5">
                                <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
                                    <div className="flex flex-wrap items-center justify-between -m-2">
                                        <div className="w-auto p-2">
                                            <h3 className="font-semibold tracking-tight">What are some example use cases for DeForm?</h3>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </a>
                            </div>
                            <div className="w-full p-1.5">
                                <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
                                    <div className="flex flex-wrap items-center justify-between -m-2">
                                        <div className="w-auto p-2">
                                            <h3 className="font-semibold tracking-tight">Can I get the @deformapp Twitter account to help share my form?</h3>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </a>
                            </div>
                            <div className="w-full p-1.5">
                                <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
                                    <div className="flex flex-wrap items-center justify-between -m-2">
                                        <div className="w-auto p-2">
                                            <h3 className="font-semibold tracking-tight">Can I use this form for my client?</h3>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </a>
                            </div>
                            <div className="w-full p-1.5">
                                <a className="block p-6 border border-gray-200 hover:border-gray-300 rounded-lg transition duration-200" href="#">
                                    <div className="flex flex-wrap items-center justify-between -m-2">
                                        <div className="w-auto p-2">
                                            <h3 className="font-semibold tracking-tight">Who is the DeForm team?</h3>
                                        </div>
                                        <div className="w-auto p-2">
                                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#171A1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="hidden mt-6 tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
  

export default LandingPage
