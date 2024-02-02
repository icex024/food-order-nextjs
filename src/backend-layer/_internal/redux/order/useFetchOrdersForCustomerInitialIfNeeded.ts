import { useEffect } from "react";
import { useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { customerOrdersInitialFetchStatus } from "./orderSelectors";
import { useFetchOrdersForCustomerInitial } from "./useFetchOrdersForCustomerInitial";
import tokenStorage from "../session/tokenStorage";
import { jwtDecode } from "jwt-decode";

export const useFetchOrdersForCustomerInitialIfNeeded = () => {
  const getCustomerId = useGetUserId();
  const fetchStatus = useAppSelector(customerOrdersInitialFetchStatus);
  const fetch = useFetchOrdersForCustomerInitial();
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED") {
      fetch(getCustomerId());
    }
  }, [fetch, fetchStatus, getCustomerId]);
};
