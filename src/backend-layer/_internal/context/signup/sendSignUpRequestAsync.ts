import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpContextInterface, SignUpDto } from "./SignUpContext";
import { sendSignUpRequest } from "./SignUpService";
import { AppState } from "../../store";
import { Session } from "inspector";
import {
  SessionStateInterface,
  SessionStatusEnum,
} from "../../redux/session/SessionStateInterface";

export const sendSignUpRequestAsync = createAsyncThunk<
  { token: string },
  SignUpDto,
  { state: AppState }
>("singup/sendSignUpRequestAsync", async (signUpDto) => {
  const response = await sendSignUpRequest(signUpDto);

  if (response.status != 200) {
    throw Error("Save failed");
  }

  return response.data;
});

export const applySendSignUpRequestAsync = (
  builder: ActionReducerMapBuilder<SessionStateInterface>
) => {
  builder.addCase(sendSignUpRequestAsync.fulfilled, (state, action) => {
    state.token = action.payload.token;
    state.sessionStatus = SessionStatusEnum.Ready;
  });
  builder.addCase(sendSignUpRequestAsync.rejected, (state) => {
    state.sessionStatus = SessionStatusEnum.WrongCredentials;
  });
};
