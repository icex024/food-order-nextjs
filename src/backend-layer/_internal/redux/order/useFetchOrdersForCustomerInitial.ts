import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchOrdersForCustomerInitialAsync } from "./fetchOrdersForCustomerInitialAsync";

export const useFetchOrdersForCustomerInitial = () => {
  const dispatch = useAppDispatch();

  return (customerId: string) => {
    dispatch(fetchOrdersForCustomerInitialAsync({ customerId }));
  };
};
