import { useAppSelector } from "../../store";
import { customerOrders } from "./orderSelectors";

export const useOrdersForCustomer = () => {
  return useAppSelector(customerOrders);
};
