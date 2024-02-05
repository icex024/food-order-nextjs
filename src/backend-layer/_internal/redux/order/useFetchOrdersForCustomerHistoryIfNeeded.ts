import { useEffect } from "react";
import { useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { customerOrdersHistoryFetchStatus } from "./orderSelectors";
import { useFetchOrdersForCustomerHistory } from "./useFetchOrdersForCustomerHistory";

export const useFetchOrdersForCustomerHistoryIfNeeded = () => {
  const getCustomerId = useGetUserId();
  const fetchStatus = useAppSelector(customerOrdersHistoryFetchStatus);
  const fetch = useFetchOrdersForCustomerHistory();
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED") {
      fetch(getCustomerId());
    }
  }, [fetch, fetchStatus, getCustomerId]);
};
