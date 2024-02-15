import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SessionStateInterface,
  SessionStatusEnum,
} from "./SessionStateInterface";
import { setAuthToken, setAuthTokenFile } from "../../axios-wrapper";
import tokenStorage from "./tokenStorage";
import { applySendSignUpRequestAsync } from "../../context/signup/sendSignUpRequestAsync";

const initialState: SessionStateInterface = {
  token: "",
  userId: "",
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
      setAuthTokenFile(action.payload);
      tokenStorage.setToken(action.payload);
    },
    setSessionTokenWrondCredentials: (state) => {
      state.sessionStatus = SessionStatusEnum.WrongCredentials;
    },
  },
  extraReducers: (builder) => {
    applySendSignUpRequestAsync(builder);
  },
});

export const { setSessionToken, setSessionTokenWrondCredentials } =
  sessionSlice.actions;

export default sessionSlice.reducer;
