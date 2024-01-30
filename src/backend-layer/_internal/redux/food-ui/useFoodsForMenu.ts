import { useAppSelector } from "../../store";
import { selectedFoodsByMenuId } from "./foodUISelector";

export const useFoodsForMenu = (id: string) => {
  const foods = useAppSelector((state) => selectedFoodsByMenuId(state, id));
  return foods;
};
