import { useEffect } from "react";
import { useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { delivererOrdersTakenFetchStatus } from "./orderSelectors";
import { useFetchOrdersForDelivererTaken } from "./useFetchOrdersForDelivererTaken";

export const useFetchOrdersForDelivererTakenIfNeeded = () => {
  const getDelivererId = useGetUserId();
  const fetchStatus = useAppSelector(delivererOrdersTakenFetchStatus);
  const fetch = useFetchOrdersForDelivererTaken();
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED" && getDelivererId() !== "") {
      fetch(getDelivererId());
    }
  }, [fetch, fetchStatus, getDelivererId]);
};
