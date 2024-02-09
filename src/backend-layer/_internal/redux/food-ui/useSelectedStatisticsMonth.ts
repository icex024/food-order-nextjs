import { useAppSelector } from "../../store";
import { selectedFoodStatisticsMonth } from "./foodUISelector";

export const useSelectedStatisticsMonth = () => {
  return useAppSelector(selectedFoodStatisticsMonth);
};
