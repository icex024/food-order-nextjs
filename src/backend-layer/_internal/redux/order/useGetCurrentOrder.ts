import { useAppSelector } from "../../store";
import { currentOrder } from "./orderSelectors";

export const useGetCurrentOrder = () => {
  return useAppSelector(currentOrder);
};
