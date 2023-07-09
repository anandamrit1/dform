import { useState, useEffect, useRef } from 'react';
import logo1 from '../Images/logo.webp'
import logo2 from '../Images/logo2.png'
import logo3 from '../Images/logo3.webp'
import { HiOutlineTrash, HiOutlineLink, HiOutlineLogout } from 'react-icons/hi';

export type FormType = {
  title: string;
  coverImg: string;
  response: number;
}

function AdminDashboard() {

  const [showLogout, setShowLogout] = useState(false);
  const logoutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (logoutRef.current && !logoutRef.current.contains(event.target as Node)) {
        setShowLogout(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleImageClick = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    console.log("Loggin Out...");
  };

  const handleShowPrice = () => {
    console.log("Showing Prices...");
  };

  const handleAddForm = () => {
    console.log("Adding New form...");
  };
  


  const arr = [
    { title: "Title of Form", coverImg: logo3 as string, response: 0 },
    { title: "Title of Form and other", coverImg: logo3 as string, response: 0 },
    { title: "Title of Form and other", coverImg: logo3 as string, response: 0 },
    { title: "Title of Form", coverImg: logo3 as string, response: 0 },
    { title: "Title of Form and other", coverImg: logo3 as string, response: 0 },
    { title: "Title of Form and other", coverImg: logo3 as string, response: 0 },
    { title: "Title of Form and other", coverImg: logo3 as string, response: 0 },
  ]
  return (
    <div className="w-screen flex flex-col items-center justify-center">

      {/* Navbar starts */}
      <div className="flex flex-row w-full py-7 p-5 sm:px-9 justify-between items-center">
        <div className="flex font-bold text-[22px] space-x-2 justify-center items-center">
          <img src={logo1} alt="logo" className='w-7 h-7' />
          <div>DeForm</div>
        </div>
        <div className="flex space-x-5">
          <div className='border-2 px-4 py-1 font-bold rounded-lg border-indigo-500 flex items-center hover:bg-indigo-50 cursor-pointer' onClick={handleShowPrice}>
            🚀 Free
          </div>
          <div className="flex justify-center items-center space-x-2 hover:opacity-80 cursor-pointer transition duration-200" onClick={handleImageClick}>
            <div>
              <img src={logo2} alt="profile" className="w-11 h-11"/>
              {showLogout && (
                <div className='absolute rounded-lg shadow-lg my-1 border' ref={logoutRef}>
                  <div className='flex space-x-2 px-5 py-2 rounded-lg hover:bg-red-100 justify-center items-center'>
                    <HiOutlineLogout size={18} />
                    <div onClick={handleLogout} >Logout</div>
                  </div>
                </div>
              )}
            </div>
            <div className='stext-gray-500 text-sm opacity-0 left-0 top-0 sm:pr-8 absolute sm:opacity-100 sm:static '> anuragagarwal203@gmail.com </div>
          </div>
        </div>
      </div>
      {/* Navbar ends */}



      <Comp1 />


      <div className="flex flex-row flex-wrap justify-center ml-3 sm:mx-7 items-center max-w-[1200px]">

        <div className='h-[302px] w-[250px] bg-white border rounded-3xl shadow-lg my-4 mx-4 hover:opacity-90 transition duration-200 cursor-pointer' onClick={handleAddForm}>
          <div className="flex flex-col items-center justify-center space-y-6 h-full">
            <div className="h-[75px] w-[75px] rounded-[50%] bg-indigo-300 p-[3px]">
              <div className="relative flex h-full w-full items-center justify-center rounded-[50%] bg-white">
                <div className="absolute h-[25px] w-[3px] rounded bg-indigo-300">
                </div>
                <div className="absolute h-[3px] w-[25px] rounded bg-indigo-300">
                </div>
              </div>
            </div>
            <div className='text-gray-400'>Create DeForm</div>
          </div>
        </div>

        {arr.map((form) => (
          <FormCard form={form} />
        ))}
      </div>
    </div>
  )
}

const FormCard = ({ form }: { form: FormType }) => {
  const handleDeleteClick = () => {
    const confirmed = window.confirm(`Are you sure you want to delete "${form.title}" and all it's responses?`);
    if (confirmed) {
      // Call your delete function here
      deleteFile();
    }
  };

  const deleteFile = () => {
    // delete file logic here
    console.log('File deleted');
  };
  const handleCopyLink = () => {
    const textToCopy = 'Linkt to the form';
    navigator.clipboard.writeText(textToCopy);
    console.log("Link Copied...");
  };

  const handleOpenForm = () => {
    console.log("Opening form...");
  };


  return (
    <div className='h-[302px] w-[250px] bg-white border rounded-3xl shadow-lg my-4 mx-4 hover:opacity-90 transition duration-200' onClick={handleOpenForm}>
      <div className='flex justify-center items-center h-[210px] w-[248px] bg-gradient-to-br from-indigo-400  to-white rounded-t-3xl cursor-pointer'>
        <img src={form.coverImg} alt="logo3" className='h-24 w-24 rounded-full' />
      </div>
      <div className='w-full h-[80px] flex flex-row justify-between px-6 items-center'>
        <div className="flex flex-col space-y-1 justify-center">
          <div>{form.title.length > 18 ? form.title.substring(0, 16) + "..." : form.title}</div>
          <div className='text-gray-400'>{form.response > 0 ? form.response : "No"} responses</div>
        </div>
        <div className='flex justify-center items-center' >
          <div className='hover:bg-indigo-100 p-2 rounded-full cursor-pointer' onClick={handleCopyLink}> <HiOutlineLink size={18} /> </div>
          <div className='hover:bg-red-100 p-2 hover:text-red-500 rounded-full cursor-pointer' onClick={handleDeleteClick}> <HiOutlineTrash size={18} /> </div>
        </div>
      </div>
    </div>
  )
}

const Comp1 = () => {
  return (
    <div className="flex justify-between items-center w-full p-5 sm:px-9 py-6 sm:pr-14">
      <div className="font-bold text-xl">
        DeForm's Workspace
      </div>
      <div className="flex -space-x-3 hover:opacity-80 cursor-pointer justify-center items-center">
        <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center font-thin">
          {/* <IoIosAdd size={40} /> */}
          <div className="h-[24px] w-[24px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd"></path></svg></div>
        </div>
        <div className='absolute left-0 right-0 opacity-0 sm:static sm:opacity-100 '>
          <div className="relative group">
            <img src={logo2} alt="profile" className="w-11 h-11" />
            <div className="absolute sm:-top-9 sm:-right-4 bg-black text-white px-2 py-2 rounded-lg text-xs opacity-0 transition-opacity duration-100 group-hover:opacity-100">
              anuragagarwal203@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
