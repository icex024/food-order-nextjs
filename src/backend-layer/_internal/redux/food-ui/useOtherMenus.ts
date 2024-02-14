import { useAppSelector } from "../../store";
import { selectedMenus } from "./foodUISelector";

export const useOtherMenus = () => {
  const menus = useAppSelector(selectedMenus);
  return (menuId: string) => {
    return menus.filter((menu) => menu.id !== menuId);
  };
};
