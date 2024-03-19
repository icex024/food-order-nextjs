import { useAppDispatch } from "../../store";
import { logOutSettings } from "./sessionSlice";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  return () => {
    dispatch(logOutSettings());
  };
};
