import { useAppSelector } from "../../store";
import { foodStatistics } from "./foodUISelector";

export const useFoodStatistics = () => {
  return useAppSelector(foodStatistics);
};
