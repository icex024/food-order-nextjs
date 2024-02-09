import { useEffect } from "react";
import { useAppSelector } from "../../store";
import { loyaltyDefinitionsFetchStatus } from "./loyaltySelectors";
import { useFetchLoyaltyDefinitions } from "./useFetchLoyaltyDefinitions";
import { useGetUserId } from "../session/useGetUserId";

export const useFetchLoyaltyDefinitionsIfNeeded = () => {
  const fetchStatus = useAppSelector(loyaltyDefinitionsFetchStatus);
  const fetch = useFetchLoyaltyDefinitions();
  const userId = useGetUserId();
  useEffect(() => {
    const id = userId();
    if (fetchStatus == "NOTFETCHED") {
      fetch(id);
    }
  }, [fetchStatus, fetch, userId]);
};
