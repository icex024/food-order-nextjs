import { useAppDispatch } from "../../store";
import { fetchOrdersDelivererHistoryAsync } from "./fetchOrdersDelivererHistoryAsync";

export const useFetchOrdersForDelivererHistory = () => {
  const dispatch = useAppDispatch();

  return (delivererId: string) => {
    dispatch(fetchOrdersDelivererHistoryAsync(delivererId));
  };
};
