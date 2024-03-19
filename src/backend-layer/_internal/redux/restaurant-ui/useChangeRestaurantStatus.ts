import { useAppDispatch } from "../../store";
import { changeRestaurantStatusAsync } from "./changeRestaurantStatusAsync";
import { EditRestaurantStatusDto } from "./reastaurantsUiService";
import { changeRestaurantStatusSlice } from "./restaurantsUiSlice";

export const useChangeRestaurantStatus = () => {
  const dispatch = useAppDispatch();
  return (restaurantId: string, status: boolean) => {
    dispatch(
      changeRestaurantStatusSlice({
        id: restaurantId,
        visibility: !status,
      })
    );
    dispatch(
      changeRestaurantStatusAsync({
        id: restaurantId,
        visibility: !status,
      })
    );
  };
};
