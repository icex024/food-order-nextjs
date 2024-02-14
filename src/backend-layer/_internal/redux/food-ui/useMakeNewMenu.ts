import { MakeMenuDto } from "@/components/manager-panel/page-components/make-menu-store/makeMenuContext";
import { useAppDispatch } from "../../store";
import { makeNewMenuAsync } from "./makeNewMenuAsync";

export const useMakeNewMenu = () => {
  const dispatch = useAppDispatch();
  return (dto: MakeMenuDto) => {
    dispatch(makeNewMenuAsync(dto));
  };
};
