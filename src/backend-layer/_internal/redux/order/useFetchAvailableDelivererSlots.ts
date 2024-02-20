import { useAppDispatch } from "../../store";
import { fetchAvailableDelivererSlotsAsync } from "./fetchAvailableDelivererSlotsAsync";

export const useFetchAvailableDelivererSlots = () => {
  const dispatch = useAppDispatch();
  return (delivererId: string) => {
    dispatch(fetchAvailableDelivererSlotsAsync(delivererId));
  };
};
