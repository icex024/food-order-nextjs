import { emptyCallback } from "@/consts";
import { createContext } from "react";

export interface IngredientContextInterface {
  makeIngredientDto: MakeIngredientDto;
  dispatchState: (updateDiff: Partial<MakeIngredientDto>) => void;
}

export interface MakeIngredientDto {
  name: string;
  meatFree: boolean;
  allergenIds: string[];
}

export function createIngredientContextInterfaceDefaultValues(): IngredientContextInterface {
  return {
    makeIngredientDto: {
      allergenIds: [],
      meatFree: false,
      name: "",
    },
    dispatchState: emptyCallback,
  };
}

export const MakeIngredientContext = createContext(
  createIngredientContextInterfaceDefaultValues()
);
