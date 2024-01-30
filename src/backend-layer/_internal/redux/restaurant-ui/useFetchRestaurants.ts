import { useAppDispatch } from "../../store";
import { fetchAllRestaurantsAsync } from "./fetchAllRestaurantsAsync";

export const useFetchRestaurants = () => {
  const dispatch = useAppDispatch();

  return () => dispatch(fetchAllRestaurantsAsync());
};
