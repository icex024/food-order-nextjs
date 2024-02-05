import { useAppSelector } from "../../store";
import { customerOrdersHistory } from "./orderSelectors";

export const useCustomerOrdersHistory = () => {
  return useAppSelector(customerOrdersHistory);
};
