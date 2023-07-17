import { useEffect, useState } from 'react'
import { magic } from '../utils/magic';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { atom, useRecoilState } from 'recoil';
import Dashboard_Navbar from './Dashboard_Navbar';

type UserType = {
    accountAddress: string,
    email: string,
    issuer: string
}
export const globalUser = atom<UserType | null>({
    key: "globalUser",
    default: null,
});

function RequireAuth({ children }: { children: React.ReactNode}) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    const setUser = useRecoilState(globalUser)[1];

    useEffect(() => {
        performLoginChecks();
    }, []);

    const performLoginChecks = async () => {
        try {
            let client = axios.create({
                baseURL: "http://localhost:5000",
                withCredentials: true,
            });

            const res = await client.get("/auth/user");
            console.log("Fetching user", res.data, res.status);
            setUser(await res.data);
            // if (res.status === 200) navigate("/dashboard");
        } catch (e) {
            console.log(e);
            await magic.user.logout();
            setUser(null);
            navigate("/");
        }

        setIsLoading(false);
    };

  return (
    <>
      {
        isLoading ? (
            <Dashboard_Navbar navbarShadow />
        ) : (
            <div>{children}</div>
        )
      }
    </>
  )
}

export default RequireAuth
