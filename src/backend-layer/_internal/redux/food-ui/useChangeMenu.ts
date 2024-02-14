import { useAppDispatch } from "../../store";
import { changeMenusAsync } from "./changeMenusAsync";
import { changeMenu } from "./foodUISlice";

export const useChangeMenu = () => {
  const dispatch = useAppDispatch();
  return (foodId: string, oldMenuId: string, newMenuId: string) => {
    dispatch(changeMenusAsync({ foodId, menuId: newMenuId }));
    dispatch(changeMenu({ foodId, oldMenuId, newMenuId }));
  };
};
