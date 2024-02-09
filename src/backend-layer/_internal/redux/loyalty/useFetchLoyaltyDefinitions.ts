import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchLoyaltyDefinitionsAsync } from "./fetchLoyaltyDefinitionsAsync";

export const useFetchLoyaltyDefinitions = () => {
  const dispatch = useAppDispatch();
  return (userId: string) => {
    dispatch(fetchLoyaltyDefinitionsAsync(userId));
  };
};
