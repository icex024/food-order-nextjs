import { useAppDispatch } from "../../store";
import { fetchOrdersDelivererTakenAsync } from "./fetchOrdersDelivererTakenAsync";

export const useFetchOrdersForDelivererTaken = () => {
  const dispatch = useAppDispatch();

  return (delivererId: string) => {
    dispatch(fetchOrdersDelivererTakenAsync(delivererId));
  };
};
