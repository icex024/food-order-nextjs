import { SessionStatusEnum } from "@/backend-layer/_internal/redux/session/SessionStateInterface";
import { useStatusSession } from "@/backend-layer/_internal/redux/session/useStatusSession";
import { useLogin, useRedirectToMainPage } from "@/backend-layer/session";
import { RegularButton } from "@/components/buttons";
import { NextPage } from "next";
import { useState } from "react";

const Login: NextPage = () => {
  const login = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const sessionStatus = useStatusSession();
  useRedirectToMainPage();
  return (
    <div className="w-full h-screen bg-primary flex flex-col justify-center">
      <div className="max-w-[512px] w-full mx-auto px-4">
        <div className="text-center font-poppins font-normal text-5xl mb-3">
          Please sign in or make new account.
        </div>
        <div className="w-full h-[48px] border-[2px] rounded-2xl border-primary-second bg-white p-1 mb-1">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="w-full h-full px-4 focus:outline-none"
            placeholder="Username"
          />
        </div>
        <div className="w-full h-[48px] border-[2px] rounded-2xl border-primary-second bg-white p-1 mb-3">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-full px-4 focus:outline-none"
            placeholder="Password"
            type="password"
          />
        </div>
        {sessionStatus == SessionStatusEnum.WrongCredentials && (
          <div className="text-center mb-3 font-poppins text-red">
            Username or password incorrect!
          </div>
        )}
        <div className="flex gap-6 px-6">
          <RegularButton className="mr-2" color="white">
            Sign up
          </RegularButton>
          <RegularButton
            onClick={() => login(username, password)}
            color="primary-fourth"
          >
            Sign in
          </RegularButton>
        </div>
      </div>
    </div>
  );
};

export default Login;
