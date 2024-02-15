import { useAppSelector } from "../../store";
import { selectAllergens } from "./foodUISelector";

export const useAllAllergens = () => {
  return useAppSelector(selectAllergens);
};
