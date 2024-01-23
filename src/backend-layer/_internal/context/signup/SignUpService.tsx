import { AxiosResponse } from "axios";
import { getAxios } from "../../axios-wrapper";
import { SignUpDto } from "./SignUpContext";

export const sendSignUpRequest = (
  signUpDto: SignUpDto
): Promise<AxiosResponse<{ token: string }, unknown>> => {
  return getAxios().post("/auth/signup", signUpDto);
};
