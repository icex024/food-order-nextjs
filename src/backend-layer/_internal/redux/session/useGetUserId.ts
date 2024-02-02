import { jwtDecode } from "jwt-decode";
import tokenStorage from "./tokenStorage";
import { useEffect, useRef } from "react";

export const useGetUserId = () => {
  return () => {
    const token = tokenStorage.getToken();
    const decoded = jwtDecode<{
      authorities: string[];
      id: string;
      sub: string;
      iat: number;
      exp: number;
    }>(typeof token === "string" ? token : "");
    return decoded.id;
  };
};
