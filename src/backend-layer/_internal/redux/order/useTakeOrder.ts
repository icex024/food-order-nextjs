import { useAppDispatch, useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { selectedAvailableSlots } from "./orderSelectors";
import { decreaseSlots, takeOrderSlice } from "./orderSlice";
import { takeOrderAsync } from "./takeOrderAsync";

export const useTakeOrder = () => {
  const dispatch = useAppDispatch();
  const delivererId = useGetUserId();
  const availableSlots = useAppSelector(selectedAvailableSlots);
  return (orderId: string) => {
    if (availableSlots > 0) {
      dispatch(takeOrderAsync({ delivererId: delivererId(), orderId }));
      dispatch(takeOrderSlice(orderId));
      dispatch(decreaseSlots());
    } else {
      alert("No more slota available!");
    }
  };
};
