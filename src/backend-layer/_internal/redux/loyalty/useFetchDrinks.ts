import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { fetchDrinksAsync } from "./fetchDrinksAsync";
import { drinks, drinksStatus } from "./loyaltySelectors";

export const useFetchDrinks = () => {
  const dispatch = useAppDispatch();
  const managerId = useGetUserId();
  const status = useAppSelector(drinksStatus);
  useEffect(() => {
    if (status === "NOTFETCHED") {
      dispatch(fetchDrinksAsync(managerId()));
    }
  }, [dispatch, managerId, status]);
  return useAppSelector(drinks);
};
