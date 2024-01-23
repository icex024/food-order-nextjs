import { useAppSelector } from "../../store";
import { selectSessionStatus } from "./sessionSelectors";

export const useStatusSession = () => {
  return useAppSelector(selectSessionStatus);
};
