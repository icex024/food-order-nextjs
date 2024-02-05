import { jwtDecode } from "jwt-decode";
import tokenStorage from "../session/tokenStorage";
import { useAppDispatch } from "../../store";
import { setCustomerId } from "./orderSlice";
import { useEffect } from "react";

export const useSetCustomerIdForOrder = () => {
  const dispatch = useAppDispatch();
  const token = tokenStorage.getToken();

  const decoded = jwtDecode<{
    authorities: string[];
    id: string;
    sub: string;
    iat: number;
    exp: number;
  }>(typeof token === "string" ? token : "");
  useEffect(() => {
    dispatch(setCustomerId(decoded.id));
  }, [dispatch, decoded]);
};
