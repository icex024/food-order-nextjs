import { useAppSelector } from "../../store";
import { ingredientByIds } from "./foodUISelector";

export const useGetIngredients = (ingredientIds: string[]) => {
  return useAppSelector((state) => ingredientByIds(state, ingredientIds));
};
