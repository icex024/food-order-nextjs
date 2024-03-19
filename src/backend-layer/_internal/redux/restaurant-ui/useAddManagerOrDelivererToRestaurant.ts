import { useAppDispatch } from "../../store";
import { addManagerOrDelivererToRestaurantAsync } from "./addManagerOrDelivererToRestaurantAsync";
import { changeRestaurantForUser } from "./restaurantsUiSlice";

export const useAddManagerOrDelivererToRestaurant = () => {
  const dispatch = useAppDispatch();

  return (restaurantId: string, userId: string, restaurantName: string) => {
    dispatch(addManagerOrDelivererToRestaurantAsync({ restaurantId, userId }));
    dispatch(changeRestaurantForUser({ userId, restaurantId, restaurantName }));
  };
};
