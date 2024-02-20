import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { useFetchAvailableDelivererSlots } from "./useFetchAvailableDelivererSlots";
import { availableSlotsFetchStatus } from "./orderSelectors";

export const useFetchAvailableDelivererSlotsIfNeeded = () => {
  const delivererId = useGetUserId();
  const status = useAppSelector(availableSlotsFetchStatus);
  const fetch = useFetchAvailableDelivererSlots();
  useEffect(() => {
    if (status === "NOTFETCHED" && delivererId() !== "") {
      fetch(delivererId());
    }
  }, [fetch, delivererId, status]);
};
