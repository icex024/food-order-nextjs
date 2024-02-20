import { useEffect } from "react";
import { useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { delivererOrdersHistoryFetchStatus } from "./orderSelectors";
import { useFetchOrdersForDelivererHistory } from "./useFetchOrdersForDelivererHistory";

export const useFetchOrdersForDelivererHistoryIfNeeded = () => {
  const getDelivererId = useGetUserId();
  const fetchStatus = useAppSelector(delivererOrdersHistoryFetchStatus);
  const fetch = useFetchOrdersForDelivererHistory();
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED" && getDelivererId() !== "") {
      fetch(getDelivererId());
    }
  }, [fetch, fetchStatus, getDelivererId]);
};
