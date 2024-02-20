import { useAppSelector } from "../../store";
import { orderDelivererTaken } from "./orderSelectors";

export const useOrdersDelivererTaken = () => {
  return useAppSelector(orderDelivererTaken);
};
