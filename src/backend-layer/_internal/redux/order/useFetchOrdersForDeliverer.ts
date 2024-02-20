import { useAppDispatch } from "../../store";
import { fetchOrdersDelivererAsync } from "./fetchOrdersDelivererAsync";

export const useFetchOrdersForDeliverer = () => {
  const dispatch = useAppDispatch();

  return (delivererId: string) => {
    dispatch(fetchOrdersDelivererAsync(delivererId));
  };
};
