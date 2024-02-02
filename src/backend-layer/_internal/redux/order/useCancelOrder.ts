import { useAppDispatch, useAppSelector } from "../../store";
import { cancelOrderCustomerAsync } from "./cancelOrderCustomerAsync";
import { selectOrderFromInitial } from "./orderSelectors";
import { changeOrderFromInitialToHistory } from "./orderSlice";

export const useCancelOrder = () => {
  const dispatch = useAppDispatch();
  return (orderId: string) => {
    dispatch(changeOrderFromInitialToHistory(orderId));
    dispatch(cancelOrderCustomerAsync(orderId));
  };
};
