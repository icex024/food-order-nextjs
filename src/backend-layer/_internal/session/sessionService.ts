import { getAxios } from "../axios-wrapper";
import { AxiosResponse } from "axios";

export const signin = (
  username: string,
  password: string
): Promise<AxiosResponse<{ token: string }, unknown>> => {
  console.log("uslo u signin");
  return getAxios().post("/auth/signin", {
    username,
    password,
  });
};

const sessionService = { signin };

export default sessionService;
