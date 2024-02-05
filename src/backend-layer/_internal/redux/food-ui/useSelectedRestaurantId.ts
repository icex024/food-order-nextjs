import { useAppSelector } from "../../store";
import { selectedRestaurantId } from "./foodUISelector";

export const useSelectedRestaurantId = () => {
  return useAppSelector(selectedRestaurantId);
};
