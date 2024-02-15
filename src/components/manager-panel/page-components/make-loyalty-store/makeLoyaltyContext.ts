import { emptyCallback } from "@/consts";
import { createContext } from "react";

export interface MakeLoyaltyDto {
  managerId: string;
  threshold: number;
  reset: boolean;
  discountInPercentage: number;
  freeDrink: string;
}

export interface MakeLoyaltyInterface {
  makeLoyaltyDto: MakeLoyaltyDto;
  dispatchState: (updateDiff: Partial<MakeLoyaltyDto>) => void;
}

export function createMakeLoyaltyContextDefaultValues(): MakeLoyaltyInterface {
  return {
    makeLoyaltyDto: {
      managerId: "",
      discountInPercentage: 1,
      reset: false,
      threshold: 1,
      freeDrink: "",
    },
    dispatchState: emptyCallback,
  };
}

export const MakeLoyaltyContext = createContext(
  createMakeLoyaltyContextDefaultValues()
);
