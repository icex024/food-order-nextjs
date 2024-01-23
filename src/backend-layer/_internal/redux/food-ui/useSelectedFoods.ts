import { useAppSelector } from "../../store";
import { selectFoods } from "./foodUISelector";

export const useSelectedFoods = () => {
  return useAppSelector(selectFoods);
};
