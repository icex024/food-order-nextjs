import { useAppDispatch } from "../../store";
import { removeFoodFromMenu } from "./foodUISlice";
import { removeFoodAsync } from "./removeFoodAsync";

export const useRemoveFoodFromMenu = () => {
  const dispatch = useAppDispatch();
  return (foodId: string, menuId: string) => {
    dispatch(removeFoodAsync(foodId));
    dispatch(removeFoodFromMenu({ foodId, menuId }));
  };
};
