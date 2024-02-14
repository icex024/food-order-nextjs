import { useContext } from "react";
import { MakeMenuContext } from "./makeMenuContext";
import { useMakeNewMenu } from "@/backend-layer/food-ui";

export const useSetMenuName = (): [string, (name: string) => void] => {
  const context = useContext(MakeMenuContext);
  return [
    context.makeMenuDto.name,
    (name: string) => {
      context.updateState({ name });
    },
  ];
};

export const useMakeMenuContext = () => {
  const context = useContext(MakeMenuContext);
  const makeMenu = useMakeNewMenu();
  return () => {
    makeMenu(context.makeMenuDto);
  };
};
