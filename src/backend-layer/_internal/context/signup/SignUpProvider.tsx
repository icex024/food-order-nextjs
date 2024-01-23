import { ReactNode, useReducer } from "react";
import {
  SignUpContext,
  SignUpContextInterface,
  SignUpDto,
  createSignUpContextDefaultValues,
} from "./SignUpContext";

function SignUpProvider({ children }: { children?: ReactNode }) {
  const [signUpValue, dispatchSignUpValue] = useReducer(
    setState,
    createSignUpContextDefaultValues().signUpDto
  );

  const [passwordCheck, dispatchPasswordCheck] = useReducer(
    setPasswordCheck,
    createSignUpContextDefaultValues().passwordCheck
  );

  const value: SignUpContextInterface = {
    signUpDto: signUpValue,
    passwordCheck: passwordCheck,
    setInterfaceState: (updateDiff) => {
      dispatchSignUpValue({ ...signUpValue, ...updateDiff });
    },
    setPasswordCheck: (passwordCheck) => {
      dispatchPasswordCheck(passwordCheck);
    },
  };

  return (
    <SignUpContext.Provider value={value}>{children}</SignUpContext.Provider>
  );
}

const setState = (state: SignUpDto, action: SignUpDto) => {
  state = { ...action };
  return state;
};

const setPasswordCheck = (state: string, action: string) => {
  state = action;
  return state;
};

export default SignUpProvider;
