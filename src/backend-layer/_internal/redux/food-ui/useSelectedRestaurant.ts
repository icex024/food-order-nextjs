import { useAppSelector } from "../../store";
import { selectedRestaurant } from "./foodUISelector";

export const useSelectedRestaurant = () => {
  return useAppSelector(selectedRestaurant);
};
