import { useEffect } from "react";
import { useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { delivererOrdersFetchStatus } from "./orderSelectors";
import { useFetchOrdersForDeliverer } from "./useFetchOrdersForDeliverer";

export const useFetchOrdersForDelivererIfNeeded = () => {
  const getDelivererId = useGetUserId();
  const fetchStatus = useAppSelector(delivererOrdersFetchStatus);
  const fetch = useFetchOrdersForDeliverer();
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED" && getDelivererId() !== "") {
      fetch(getDelivererId());
    }
  }, [fetch, fetchStatus, getDelivererId]);
};
