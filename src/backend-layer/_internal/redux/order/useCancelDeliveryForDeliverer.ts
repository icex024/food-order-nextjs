import { useAppDispatch } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { cancelDeliveryForDelivererAsync } from "./cancelDeliveryForDelivererAsync";
import { changeOrderFromTakenToReady, increaseSlots } from "./orderSlice";

export const useCancelDeliveryForDeliverer = () => {
  const dispatch = useAppDispatch();
  const delivererId = useGetUserId();
  return (orderId: string) => {
    dispatch(
      cancelDeliveryForDelivererAsync({ orderId, delivererId: delivererId() })
    );
    dispatch(changeOrderFromTakenToReady(orderId));
    dispatch(increaseSlots());
  };
};
