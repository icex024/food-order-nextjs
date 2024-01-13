import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SessionStateInterface,
  SessionStatusEnum,
} from "./SessionStateInterface";
import { setAuthToken } from "../axios-wrapper";
import tokenStorage from "./tokenStorage";

const initialState: SessionStateInterface = {
  token: "",
  sessionStatus: SessionStatusEnum.NotStarted,
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.sessionStatus = SessionStatusEnum.Ready;
      setAuthToken(action.payload);
      tokenStorage.setToken(action.payload);
    },
    setSessionTokenWrondCredentials: (state) => {
      state.sessionStatus = SessionStatusEnum.WrongCredentials;
    },
  },
});

export const { setSessionToken, setSessionTokenWrondCredentials } =
  sessionSlice.actions;

export default sessionSlice.reducer;
