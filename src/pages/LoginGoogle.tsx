import { useEffect } from "react";
import { apiClient } from "../utils/axios";
import { magic } from "../utils/magic";
import * as fcl from "@onflow/fcl";
import { useNavigate, useSearchParams } from "react-router-dom";

const AUTHORIZATION_FUNCTION = magic.flow.authorization;
fcl.config().put("accessNode.api", "https://rest-testnet.onflow.org");

function LoginGoogle() {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const loginMethod =  searchParams.get("method");

  const verify = async () => {
    try {
      console.log("SENDING TRANSACTION");
      
      var response = await fcl.send([
        fcl.transaction`
      transaction {
        var acct: AuthAccount

        prepare(acct: AuthAccount) {
          self.acct = acct
        }

        execute {
          log(self.acct.address)
        }
      }
    `,
        fcl.proposer(AUTHORIZATION_FUNCTION),
        fcl.authorizations([AUTHORIZATION_FUNCTION]),
        fcl.payer(AUTHORIZATION_FUNCTION),
        fcl.limit(9999),
      ]);
      console.log("TRANSACTION SENT");
      console.log("TRANSACTION RESPONSE", response);

      console.log("WAITING FOR TRANSACTION TO BE SEALED");
      var data = await fcl.tx(response).onceSealed();
      console.log("TRANSACTION SEALED", data);
      

      if (data.status === 4 && data.statusCode === 0) {
        console.log("Congrats!!! I Think It Works");
      } else {
        console.log(`Oh No: ${data.errorMessage}`);
      }
    } catch (error) {
      console.error("FAILED TRANSACTION", error);
    }
  };

  const loginOnServer = async (didToken: string) => {
    console.log("Logging in backend : ==> ");
    await apiClient.post(
      "/auth/login/google",
      {},
      {
        headers: {
          Authorization: "Bearer " + didToken,
        }
      }
    );
  }

  const finishEmailLogin = async () => {
    try {
      const didToken =  searchParams.get("emailLoginToken");
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
  },[])

  return (
    <div className="flex flex-col h-full w-full bg-yellow-100 items-center justify-center gap-5">
      <h1>Please wait login in progress</h1>
      <div className="h1" onClick={verify}>
        verify transaction
      </div>
    </div>
  );
}

export default LoginGoogle;
