import { useEffect } from "react";
import { useAppDispatch } from "../store";
import { fetchRestaurantByIdAsync } from "./fetchRestaurantByIdAsync";

export const useFetchRestaurantById = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRestaurantByIdAsync());
  }, [dispatch]);
};
