import { useAppSelector } from "../../store";
import { orderDelivererInDelivery } from "./orderSelectors";

export const useOrdersDelivererInDelivery = () => {
  return useAppSelector(orderDelivererInDelivery);
};
