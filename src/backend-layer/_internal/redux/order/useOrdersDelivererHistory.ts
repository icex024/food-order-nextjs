import { orderDelivererHistory } from "./orderSelectors";
import { useAppSelector } from "../../store";

export const useOrdersDelivererHistory = () => {
  return useAppSelector(orderDelivererHistory);
};
