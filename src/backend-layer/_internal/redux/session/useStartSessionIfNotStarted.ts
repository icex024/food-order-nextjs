import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { useStatusSession } from "./useStatusSession";
import { SessionStatusEnum } from "./SessionStateInterface";
import tokenStorage from "./tokenStorage";
import { setSessionToken } from "./sessionSlice";

interface DecodedToken {
  Authorities: AuthoritiesDto[];
  sub: string;
  iat: number;
  exp: number;
}

interface AuthoritiesDto {
  authority: string;
}

export const useStartSessionIfNotStarted = () => {
  const sessionStatus = useStatusSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (sessionStatus === SessionStatusEnum.NotStarted) {
      const token = tokenStorage.getToken();
      if (token) {
        dispatch(setSessionToken(token));
      } else {
        console.log("stani prika moj");
      }
    }
  });
};
