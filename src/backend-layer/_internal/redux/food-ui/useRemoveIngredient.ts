import { useAppDispatch } from "../../store";
import { removeIngredientAsync } from "./removeIngredientAsync";

export const useRemoveIngredient = () => {
  const dispatch = useAppDispatch();
  return (ingredientId: string) => {
    dispatch(removeIngredientAsync(ingredientId));
  };
};
