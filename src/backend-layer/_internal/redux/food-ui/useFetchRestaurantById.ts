import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchRestaurantByIdAsync } from "./fetchRestaurantByIdAsync";
import { selectedRestaurantId } from "./foodUISelector";

export const useFetchRestaurantById = () => {
  const dispatch = useAppDispatch();
  const restaurantId = useAppSelector(selectedRestaurantId);
  useEffect(() => {
    if (restaurantId !== "") {
      dispatch(fetchRestaurantByIdAsync(restaurantId));
    }
  }, [dispatch, restaurantId]);
};
