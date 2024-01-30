import { useAppSelector } from "../../store";
import { allRestaurants } from "./restaurantsUiSelector";

export const useRestaurants = () => {
  return useAppSelector(allRestaurants);
};
