import { useAppDispatch } from "../../store";
import { finishDeliveryAsync } from "./finishDeliveryAsync";
import { changeOrderFromInDeliveryToDelivered } from "./orderSlice";

export const useFinishDelivery = () => {
  const dispatch = useAppDispatch();
  return (orderId: string) => {
    dispatch(changeOrderFromInDeliveryToDelivered(orderId));
    dispatch(finishDeliveryAsync(orderId));
  };
};
