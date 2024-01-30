import { useAppSelector } from "../../store";
import { IngredientDto } from "./FoodInterface";
import { ingredientByIds } from "./foodUISelector";

export const useGetIngredients = (ingredientIds: string[]) => {
  return useAppSelector((state) => ingredientByIds(state, ingredientIds));
};
