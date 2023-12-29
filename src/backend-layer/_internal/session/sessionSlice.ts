import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SessionStateInterface } from "./SessionStateInterface";
import { setAuthToken } from "../axios-wrapper";
import tokenStorage from "./tokenStorage";

const initialState: SessionStateInterface = {
  token: "",
};

export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSessionToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      setAuthToken(action.payload);
      tokenStorage.setToken(action.payload);
    },
  },
});

export const { setSessionToken } = sessionSlice.actions;

export default sessionSlice.reducer;
