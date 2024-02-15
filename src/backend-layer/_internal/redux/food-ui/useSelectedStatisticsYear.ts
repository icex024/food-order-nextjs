import { useAppSelector } from "../../store";
import { selectedFoodStatisticsYear } from "./foodUISelector";

export const useSelectedStatisticsYear = () => {
  return useAppSelector(selectedFoodStatisticsYear);
};
