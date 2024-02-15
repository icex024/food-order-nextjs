import { useAppSelector } from "../../store";
import { selectedMenus } from "./foodUISelector";

export const useMenus = () => {
  return useAppSelector(selectedMenus);
};
