import { useEffect } from "react";
import { useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { delivererOrdersInDeliveryFetchStatus } from "./orderSelectors";
import { useFetchOrdersForDeliverer } from "./useFetchOrdersForDeliverer";
import { useFetchOrdersForDelivererInDelivery } from "./useFetchOrdersForDelivererInDelivery";

export const useFetchOrdersForDelivererInDeliveryIfNeeded = () => {
  const getDelivererId = useGetUserId();
  const fetchStatus = useAppSelector(delivererOrdersInDeliveryFetchStatus);
  const fetch = useFetchOrdersForDelivererInDelivery();
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED" && getDelivererId() !== "") {
      fetch(getDelivererId());
    }
  }, [fetch, fetchStatus, getDelivererId]);
};
