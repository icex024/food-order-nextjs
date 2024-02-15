import { useAppDispatch } from "../../store";
import { updateFoodPriceSlice } from "./foodUISlice";
import { updateFoodPriceAsync } from "./updateFoodPriceAsync";

export const useUpdateFoodPrice = () => {
  const dispatch = useAppDispatch();
  return (foodId: string, newPrice: number, menuId: string) => {
    dispatch(updateFoodPriceAsync({ foodId, newPrice }));
    dispatch(updateFoodPriceSlice({ foodId, newPrice, menuId }));
  };
};
