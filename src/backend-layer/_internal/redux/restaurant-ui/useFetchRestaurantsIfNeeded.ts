import { useAppSelector } from "../../store";
import { fetchStatus } from "./restaurantsUiSelector";
import { RestaurantsFetchStatus } from "./restaurantsUiSlice";
import { useFetchRestaurants } from "./useFetchRestaurants";

export const useFetchRestaurantsIfNeeded = () => {
  const status = useAppSelector(fetchStatus);
  const fetch = useFetchRestaurants();
  if (status == RestaurantsFetchStatus.NotFetched) {
    fetch();
  }
};
