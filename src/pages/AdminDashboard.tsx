import {useEffect, useState} from 'react';
import logo2 from '../Images/logo2.png'
import FormCard from '../components/FormCard';
import Dashboard_Navbar from '../components/Dashboard_Navbar';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '../utils/axios';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_SHORT_ANSWER_QUESTION, newEmptyForm } from '../utils/constants';
import { CreateFormRequestBody, Form, FormField } from '../types/Form';
import { generateId } from '../utils/GenerateId';

function AdminDashboard() {
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [forms, setForms] = useState<Form[]>();
  const user = "User";
  const navigate = useNavigate();
  const apiClient = useAxios()
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarShadow(true);
      } else {
        setNavbarShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Make an API call to get all forms
    const fetchForms = async() => {
      try {
        const res = await apiClient.get('/form/getAll')
        const data = await res.data;
        setForms(data)
      } catch (e) {
        console.log(e)
      }
    }

    // Update the state
    if (user) {
      fetchForms();
    }
  }, [user]);
  
  const handleAddForm = async() => {
    const formId = "form-" + generateId()
    const newForm: Form = {
      id: formId,
      backgroundColor: "green",
      description: "Untitled Form",
    }
    const newFormFields: FormField = {
      ...DEFAULT_SHORT_ANSWER_QUESTION,
      id: generateId()
    }
    const createFormRequestBody: CreateFormRequestBody = {
      form: newForm,
      feilds: [newFormFields]
    }
    try {
      const res = await apiClient.post("/form/create", {
        ...createFormRequestBody
      })
      const data = await res.data;
      if (data && data?.id == formId) {
        navigate(`/edit/${formId}`)
      }
    } catch(e) {
      console.log(e)
    }
  };


  const handleDeleteForm = () => {
    // Perform delete operation (update state or make an API call)
    console.log("Deleting form...");
  };

  if (!forms) {
    return <>Loading...</>
  }

  return (
    <div className="w-full flex flex-col items-center justify-center" >
      <div className='bg-white w-full h-[110px]'></div>
      <Dashboard_Navbar navbarShadow={navbarShadow} />
      <Comp1 />
      <div className="grid gap-y-8 gap-x-8 grid-cols-custom ">
        <div className='h-[302px] w-[250px] bg-white border rounded-3xl shadow-lg hover:opacity-90 transition duration-200 cursor-pointer' onClick={handleAddForm}>
          <div className="flex flex-col items-center justify-center space-y-6 h-full">
            <div className="h-[75px] w-[75px] rounded-[50%] bg-secondary p-[3px]">
              <div className="relative flex h-full w-full items-center justify-center rounded-[50%] bg-white">
                <div className="absolute h-[25px] w-[3px] rounded bg-secondary">
                </div>
                <div className="absolute h-[3px] w-[25px] rounded bg-secondary">
                </div>
              </div>
            </div>
            <div className='text-gray-400'>Create DeForm</div>
          </div>
        </div>

        {forms.map((form, index) => (
          <FormCard key={index} form={form} onClick={() => navigate(`/edit/${form.id}`)} onDelete={handleDeleteForm} />
        ))}

      </div>
      <div className="mb-6"></div>
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
          <div className="h-[24px] w-[24px]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd"></path></svg></div>
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