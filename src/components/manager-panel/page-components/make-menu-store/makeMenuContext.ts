import { emptyCallback } from "@/consts";
import { createContext } from "react";

export interface MakeMenuContextInterface {
  makeMenuDto: MakeMenuDto;
  updateState: (updateDiff: Partial<MakeMenuDto>) => void;
}

export interface MakeMenuDto {
  name: string;
  managerId: string;
}

export function makeMenuContextInterfaceDefaultValues(): MakeMenuContextInterface {
  return {
    makeMenuDto: {
      name: "",
      managerId: "",
    },
    updateState: emptyCallback,
  };
}

export const MakeMenuContext = createContext(
  makeMenuContextInterfaceDefaultValues()
);
