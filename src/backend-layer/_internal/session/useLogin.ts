import { useAppDispatch } from "../store";
import { signin } from "./sessionService";
import { setSessionToken } from "./sessionSlice";
import axios, { AxiosError } from "axios";

export function useLogin() {
  const dispatch = useAppDispatch();

  const login = (username: string, password: string) => {
    signin(username, password)
      .then((response) => {
        dispatch(setSessionToken(response.data.token));
      })
      .catch((error: Error | AxiosError) => {
        if (axios.isAxiosError(error)) {
          if (error.response?.status == 401) {
            alert("Wrong credentials!");
            return;
          }
        }
      });
  };

  return login;
}
