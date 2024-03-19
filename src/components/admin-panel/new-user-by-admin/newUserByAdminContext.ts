import { emptyCallback } from "@/consts";
import { createContext } from "react";

export interface NewUserByAdminInterface {
  newUser: CreateUserByAdminDto;
  dispatchState: (updateDiff: Partial<CreateUserByAdminDto>) => void;
}

export interface CreateUserByAdminDto {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  role: string;
  delivererSlots: number;
}

export function createNewUserByAdminDefaultValues(): NewUserByAdminInterface {
  return {
    newUser: {
      delivererSlots: 0,
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      role: "MANAGER",
      username: "",
    },
    dispatchState: emptyCallback,
  };
}

export const NewUserByAdminContext = createContext(
  createNewUserByAdminDefaultValues()
);
