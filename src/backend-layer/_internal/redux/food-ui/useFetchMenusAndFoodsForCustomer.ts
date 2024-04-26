import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  menusCustomerFetchStatus,
  selectedRestaurantId,
} from "./foodUISelector";
import { fetchMenusAndFoodsForCustomerAsync } from "./fetchMenusAndFoodsForCustomerAsync";

export const useFetchMenusAndFoodsForCustomer = () => {
  const restaurantId = useAppSelector(selectedRestaurantId);
  const fetchStatus = useAppSelector(menusCustomerFetchStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (fetchStatus === "NOTFETCHED" && restaurantId !== "") {
      dispatch(fetchMenusAndFoodsForCustomerAsync(restaurantId));
    }
  }, [dispatch, restaurantId, fetchStatus]);
};
