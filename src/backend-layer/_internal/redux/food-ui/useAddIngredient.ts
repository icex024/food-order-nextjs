import { MakeIngredientDto } from "@/components/manager-panel/page-components/make-ingredient-store/makeIngredientContext";
import { useAppDispatch } from "../../store";
import { addIngredientAsync } from "./addIngredientAsync";

export const useAddIngredient = () => {
  const dispatch = useAppDispatch();

  return (dto: MakeIngredientDto) => {
    dispatch(addIngredientAsync(dto));
  };
};
