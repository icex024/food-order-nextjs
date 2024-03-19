import { useContext } from "react";
import { NewUserByAdminContext } from "./newUserByAdminContext";
import { useCreateUserByAdmin } from "@/backend-layer/restaurants-ui";

export const useSetFirstNameUserByAdmin = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewUserByAdminContext);
  return [
    context.newUser.firstName,
    (firstName: string) => {
      context.dispatchState({ firstName });
    },
  ];
};
export const useSetLastNameUserByAdmin = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewUserByAdminContext);
  return [
    context.newUser.lastName,
    (lastName: string) => {
      context.dispatchState({ lastName });
    },
  ];
};
export const useSetUsernameUserByAdmin = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewUserByAdminContext);
  return [
    context.newUser.username,
    (username: string) => {
      context.dispatchState({ username });
    },
  ];
};
export const useSetEmailUserByAdmin = (): [string, (value: string) => void] => {
  const context = useContext(NewUserByAdminContext);
  return [
    context.newUser.email,
    (email: string) => {
      context.dispatchState({ email });
    },
  ];
};
export const useSetPasswordUserByAdmin = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewUserByAdminContext);
  return [
    context.newUser.password,
    (password: string) => {
      context.dispatchState({ password });
    },
  ];
};
export const useSetRoleUserByAdmin = (): [string, (value: string) => void] => {
  const context = useContext(NewUserByAdminContext);
  return [
    context.newUser.role,
    (role: string) => {
      context.dispatchState({ role });
    },
  ];
};
export const useSetDelivererSlotsUserByAdmin = (): [
  number,
  (value: number) => void
] => {
  const context = useContext(NewUserByAdminContext);
  return [
    context.newUser.delivererSlots,
    (delivererSlots: number) => {
      context.dispatchState({ delivererSlots });
    },
  ];
};

export const useCreateUserByAdminContext = () => {
  const context = useContext(NewUserByAdminContext);
  const createUser = useCreateUserByAdmin();
  return () => {
    createUser(context.newUser);
  };
};
