import { useAppSelector } from "../../store";
import { allIngredients } from "./foodUISelector";

export const useAllIngredients = () => {
  return useAppSelector(allIngredients);
};
