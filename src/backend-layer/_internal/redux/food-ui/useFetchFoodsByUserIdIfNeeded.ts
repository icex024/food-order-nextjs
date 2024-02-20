import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { foodsFetchStatus } from "./foodUISelector";
import { useFetchFoodsByUserId } from "./useFetchFoodsByUserId";

export const useFetchFoodsByUserIdIfNeeded = () => {
  const status = useAppSelector(foodsFetchStatus);
  const userId = useGetUserId();
  const fetch = useFetchFoodsByUserId();
  useEffect(() => {
    const id = userId();
    if (status === "NOTFETCHED" && id !== "") {
      fetch(id);
    }
  }, [status, userId, fetch]);
};
