import { emptyCallback } from "@/consts";
import { createContext } from "react";

export interface MakeNewItemContextInterface {
  makeItemDto: MakeItemDto;
  image: any;
  dispatchState: (updateDiff: Partial<MakeItemDto>) => void;
  dispatchImage: (image: any) => void;
}

export interface MakeItemDto {
  name: string;
  description: string;
  ingredients: string[];
  estimatedTime: number;
  foodType: FoodTypeEnum;
  meatFree: boolean;
  price: number;
  menuId: string;
}

export enum FoodTypeEnum {
  PIZZA = "PIZZA",
  MEAT = "MEAT",
  SOUP = "SOUP",
  DESSERT = "DESSERT",
  SALAD = "SALAD",
  PASTA = "PASTA",
  APPETIZER = "APPETIZER",
  DRINK = "DRINK",
  MIX = "MIX",
}

export function createMakeNewItemContextInterfaceWithDefultValues(): MakeNewItemContextInterface {
  return {
    makeItemDto: {
      description: "",
      estimatedTime: 0,
      foodType: FoodTypeEnum.MIX,
      ingredients: [],
      meatFree: false,
      menuId: "",
      name: "",
      price: 0,
    },
    image: null,
    dispatchState: emptyCallback,
    dispatchImage: emptyCallback,
  };
}

export const NewItemContext = createContext(
  createMakeNewItemContextInterfaceWithDefultValues()
);
