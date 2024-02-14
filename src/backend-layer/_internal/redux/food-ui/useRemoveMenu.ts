import { useAppDispatch, useAppSelector } from "../../store";
import { removeMenuSlice } from "./foodUISlice";
import { removeMenuAsync } from "./removeMenuAsync";

export const useRemoveMenu = () => {
  const dispatch = useAppDispatch();
  return (menuId: string) => {
    dispatch(removeMenuSlice(menuId));
    dispatch(removeMenuAsync(menuId));
  };
};
