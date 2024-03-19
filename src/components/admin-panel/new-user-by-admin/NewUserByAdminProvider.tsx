import { ReactNode, useReducer } from "react";
import {
  CreateUserByAdminDto,
  NewUserByAdminContext,
  NewUserByAdminInterface,
  createNewUserByAdminDefaultValues,
} from "./newUserByAdminContext";

export const NewUserByAdminProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [initialState, disptachState] = useReducer(
    dispatchStateContext,
    createNewUserByAdminDefaultValues().newUser
  );

  const value: NewUserByAdminInterface = {
    newUser: initialState,
    dispatchState: (updateDiff) =>
      disptachState({ ...initialState, ...updateDiff }),
  };

  return (
    <NewUserByAdminContext.Provider value={value}>
      {children}
    </NewUserByAdminContext.Provider>
  );
};

const dispatchStateContext = (
  state: CreateUserByAdminDto,
  action: CreateUserByAdminDto
) => {
  state = { ...action };
  return state;
};
