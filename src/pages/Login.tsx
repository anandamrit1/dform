import axios from "axios";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { magic } from "../utils/magic";
import { useEffect } from "react";
import { Google } from "@mui/icons-material";
import loadingFast from '../Images/loading-fast.gif'

function Login() {
  const [loading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");
  const navigate = useNavigate();
  const googleLogin = async () => {
    await magic.oauth.loginWithRedirect({
      provider: "google" /* 'google', 'facebook', 'apple', or 'github' */,
      redirectURI: `${window.location.origin}/login/auth?method=google`,
      scope: [
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/userinfo.profile",
      ],
    });
  };

  useEffect(() => {
    performLoginChecks();
  }, []);

  const performLoginChecks = async () => {
    try {
      const client = axios.create({
        baseURL: "http://localhost:5000",
        withCredentials: true,
      });

      const res = await client.get("/auth/user");
      console.log("Fetching user", res.data, res.status);
      if (res.status === 200) navigate("/dashboard");
    } catch (e) {
      console.log("Fetching User Login Error: ", e);
      await magic.user.logout();
    }
    
    setIsLoading(false);
  };

  const emailLogIn = async () => {
    try {
      console.log(email)
      if (!email) return;
      const didToken = await magic.auth.loginWithMagicLink({ email });
      console.log(didToken)
      navigate(`/login/auth?method=email&emailLoginToken=${didToken}`);
    } catch (e) {
      console.log("Email Logi Error : ", e);
    }
  };

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-green-100 items-center justify-center gap-5">
      {loading ? (
        <div className="flex items-center justify-center h-screen w-screen absolute bg-white top-0 left-0">
          <img src={loadingFast} alt="loading" />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 bg-white px-8 py-12 w-1/3 rounded-2xl">
          <form className="w-full">
            <input required className="p-4 w-full border-[1px] border-gray-600 rounded-md focus:outline-none" placeholder="Enter your email" type="text" value={email} onChange={handleChange} />
            <button type="submit" className="flex justify-center rounded-md w-full bg-green-400 hover:bg-green-500 text-white px-5 py-2 my-4" onClick={emailLogIn}>
              Login using email
            </button>
          </form>
          <button className="flex gap-4 justify-center bg-white px-5 py-3 text-gray-600 rounded-md w-full border-[1px] border-gray-600" onClick={googleLogin}>
            <span><Google /></span>Login using google
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
