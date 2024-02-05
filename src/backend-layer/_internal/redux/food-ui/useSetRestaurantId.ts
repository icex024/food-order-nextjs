import { useAppDispatch } from "../../store";
import { setRestaurantId } from "./foodUISlice";

export const useSetRestaurantId = () => {
  const dispatch = useAppDispatch();

  return (restaurantId: string) => {
    dispatch(setRestaurantId(restaurantId));
  };
};
