import { useAppDispatch } from "../../store";
import { fetchOrdersForCustomerHistoryAsync } from "./fetchOrdersForCustomerHistortAsync";

export const useFetchOrdersForCustomerHistory = () => {
  const dispatch = useAppDispatch();

  return (customerId: string) => {
    dispatch(fetchOrdersForCustomerHistoryAsync({ customerId }));
  };
};
