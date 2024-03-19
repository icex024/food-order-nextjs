import { jwtDecode } from "jwt-decode";
import { SessionStatusEnum } from "./SessionStateInterface";
import tokenStorage from "./tokenStorage";
import { useStatusSession } from "./useStatusSession";
import { useEffect, useRef, useState } from "react";

export const useRole = () => {
  const status = useStatusSession();
  let [retValue, setRetValue] = useState("");
  useEffect(() => {
    if (status == SessionStatusEnum.Ready && retValue === "") {
      const token = tokenStorage.getToken();
      if (typeof token === "string") {
        const decoded = jwtDecode<{
          authorities: string[];
          id: string;
          sub: string;
          iat: number;
          exp: number;
        }>(token);
        setRetValue(decoded.authorities[0]);
      }
    }
  }, [status, retValue]);

  return retValue;
};
