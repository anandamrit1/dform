import { useEffect } from "react";
import { useAxios } from "../utils/axios";
import { magic } from "../utils/magic";
import { useNavigate, useSearchParams } from "react-router-dom";
import loadingFast from '../Images/loading-fast.gif'

function LoginGoogle() {
  const [searchParams] = useSearchParams();
  const loginMethod = searchParams.get("method");

  const navigate = useNavigate();
  const apiClient = useAxios()

  const loginOnServer = async (didToken: string) => {
    console.log("Logging in backend : ==> ");
    const res = await apiClient.post(
      "/auth/login/google",
      {},
      {
        headers: {
          Authorization: "Bearer " + didToken,
        }
      }
    );
    const { data } = res
    if (data) {
      navigate("/dashboard");
    }
  }

  const finishEmailLogin = async () => {
    try {
      const didToken = searchParams.get("emailLoginToken");
      // TODO: When token is empty
      await loginOnServer(didToken ?? '')
    } catch (err) {
      console.error("Email Login Error", err);
    }
  }

  const finishGoogleLogin = async () => {
    try {
      console.log("Google Fetching Result : ==> ");
      const profile = await magic.oauth.getRedirectResult();
      console.log("Google Login Result : ==> ", profile);
      await loginOnServer(profile.magic.idToken)
    } catch (err) {
      console.error("Google Login Error", err);
    }
  };

  const finishSocialLogin = async () => {
    if (loginMethod === "google") await finishGoogleLogin()
    else if (loginMethod === "email") await finishEmailLogin()
    navigate("/")
  }

  const logout = async () => {
    await magic.user.logout();
  };

  useEffect(() => {
    finishSocialLogin()
  }, [])

  return (
    <div className="flex flex-col h-full w-full items-center justify-center gap-5">
      <div className='flex justify-center items-center w-1/3 h-screen'>
        <img src={loadingFast} alt="loading" />
      </div>
    </div>
  );
}

export default LoginGoogle;
