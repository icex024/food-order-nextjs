import { useAppSelector } from "../../store";
import { orderDeliverer } from "./orderSelectors";

export const useOrdersDeliverer = () => {
  return useAppSelector(orderDeliverer);
};
