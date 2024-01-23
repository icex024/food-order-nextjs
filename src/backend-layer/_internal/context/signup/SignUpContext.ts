import { emptyCallback } from "@/consts";
import { createContext, useContext } from "react";

export interface SignUpDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  city: string;
  streetName: string;
  streetNumber: string;
  latitude: number;
  longitude: number;
}

export interface SignUpContextInterface {
  signUpDto: SignUpDto;
  passwordCheck: string;
  setInterfaceState: (updateDiff: SignUpDto) => void;
  setPasswordCheck: (passwordCheck: string) => void;
}

export function createSignUpContextDefaultValues(): SignUpContextInterface {
  return {
    signUpDto: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      city: "",
      streetName: "",
      streetNumber: "",
      latitude: 0.0,
      longitude: 0.0,
    },
    passwordCheck: "",
    setInterfaceState: emptyCallback,
    setPasswordCheck: emptyCallback,
  };
}

export const SignUpContext = createContext(createSignUpContextDefaultValues());
