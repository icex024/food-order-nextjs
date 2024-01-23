import { useAppDispatch } from "../../store";
import { signin } from "./sessionService";
import {
  setSessionToken,
  setSessionTokenWrondCredentials,
} from "./sessionSlice";
import axios, { AxiosError } from "axios";

export function useLogin() {
  const dispatch = useAppDispatch();

  return (username: string, password: string) => {
    signin(username, password)
      .then((response) => {
        dispatch(setSessionToken(response.data.token));
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status == 403) {
            dispatch(setSessionTokenWrondCredentials());
            return;
          }
        }
      });
  };
}
