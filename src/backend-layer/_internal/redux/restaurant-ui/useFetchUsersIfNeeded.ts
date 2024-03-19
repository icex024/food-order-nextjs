import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { usersFetchStatus } from "./restaurantsUiSelector";
import { fetchManagersAndDeliverersAsync } from "./fetchManagersAndDeliverersAsync";

export const useFetchUsersIfNeeded = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(usersFetchStatus);
  useEffect(() => {
    if (status === "NOTFETCHED") {
      dispatch(fetchManagersAndDeliverersAsync());
    }
  }, [status, dispatch]);
};
