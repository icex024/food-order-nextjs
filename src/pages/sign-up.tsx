import { RegularTextInput } from "@/components/inputs";
import { MapComponentSignUp } from "@/components/map";
import { SectionContainer } from "@/components/sections";
import {
  SignUpProvider,
  useCity,
  useEmail,
  useFirstName,
  useLastName,
  usePassword,
  usePasswordCheck,
  useSignUp,
  useStreetName,
  useStreetNumber,
  useUsername,
} from "@/backend-layer/_internal/context/signup";
import { NextPage } from "next";
import { useState } from "react";
import { RegularButton } from "@/components/buttons";
import { useRouter } from "next/router";
import { useStatusSession } from "@/backend-layer/_internal/redux/session/useStatusSession";
import { useRedirectToMainPage } from "@/backend-layer/session";

const SignUp: NextPage = () => {
  useRedirectToMainPage();
  return (
    <div className="bg-primary h-screen">
      <SectionContainer className="h-screen flex flex-col justify-center ">
        <div className="mx-auto max-w-[512px] w-full">
          <SignUpProvider>
            <SignUpContent />
          </SignUpProvider>
        </div>
      </SectionContainer>
    </div>
  );
};

const SignUpContent = () => {
  const router = useRouter();

  const [mock, setMock] = useState<string>("");
  const [username, setUsername] = useUsername();
  const [firstname, setFirstname] = useFirstName();
  const [lastName, setLastName] = useLastName();
  const [email, setEmail] = useEmail();
  const [password, setPassword] = usePassword();
  const [city, setCity] = useCity();
  const [streetNumber, setStreetNumber] = useStreetNumber();
  const [streetName, setStreetName] = useStreetName();
  const [, setPasswordCheck] = usePasswordCheck();
  const signUp = useSignUp();
  return (
    <>
      <RegularTextInput
        className="mb-2"
        setState={setUsername}
        placeholder="Username"
      />
      <RegularTextInput
        className="mb-2"
        setState={setEmail}
        placeholder="E-mail"
      />
      <RegularTextInput
        className="mb-2"
        setState={setPassword}
        placeholder="Password"
        password
      />
      <RegularTextInput
        className="mb-2"
        setState={setPasswordCheck}
        placeholder="Password again"
        password
      />
      <RegularTextInput
        className="mb-2"
        setState={setFirstname}
        placeholder="First name"
      />
      <RegularTextInput
        className="mb-2"
        setState={setLastName}
        placeholder="Last name"
      />
      <RegularTextInput
        className="mb-2"
        setState={setCity}
        placeholder="City"
      />
      <RegularTextInput
        className="mb-2"
        setState={setStreetName}
        placeholder="Street name"
      />
      <RegularTextInput
        className="mb-2"
        setState={setStreetNumber}
        placeholder="Street number"
      />
      <MapComponentSignUp />
      <div className="flex gap-2 mt-2">
        <RegularButton onClick={() => router.push("/")} color="white">
          Go back
        </RegularButton>
        <RegularButton onClick={() => signUp()} color="primary-fourth">
          Confirm
        </RegularButton>
      </div>
    </>
  );
};

export default SignUp;
