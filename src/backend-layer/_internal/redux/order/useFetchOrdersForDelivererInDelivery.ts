import { useAppDispatch } from "../../store";
import { fetchOrdersDelivererInDeliveryAsync } from "./fetchOrdersDelivererInDeliveryAsync";

export const useFetchOrdersForDelivererInDelivery = () => {
  const dispatch = useAppDispatch();

  return (delivererId: string) => {
    dispatch(fetchOrdersDelivererInDeliveryAsync(delivererId));
  };
};
