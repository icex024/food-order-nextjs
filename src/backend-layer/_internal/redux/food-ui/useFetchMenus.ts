import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchMenusAsync } from "./fetchMenusAsync";
import {
  menusCustomerFetchStatus,
  selectedMenus,
  selectedRestaurantId,
} from "./foodUISelector";

export const useFetchMenus = () => {
  const dispatch = useAppDispatch();
  const restaurantId = useAppSelector(selectedRestaurantId);
  const fetchStatus = useAppSelector(menusCustomerFetchStatus);
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED" && restaurantId !== "") {
      dispatch(fetchMenusAsync({ restaurantId }));
    }
  }, [dispatch, restaurantId, fetchStatus]);
  return useAppSelector(selectedMenus);
};
