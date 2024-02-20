import { useAppDispatch, useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { takenOrdersIds } from "./orderSelectors";
import { changeOrderFromTakenToInDelivery } from "./orderSlice";
import { startDeliveryAsync } from "./startDeliveryAsync";

export const useStartDelivery = () => {
  const dispatch = useAppDispatch();
  const orderIds = useAppSelector(takenOrdersIds);
  const delivererId = useGetUserId();
  return () => {
    dispatch(changeOrderFromTakenToInDelivery());
    dispatch(startDeliveryAsync({ delivererId: delivererId(), orderIds }));
  };
};
