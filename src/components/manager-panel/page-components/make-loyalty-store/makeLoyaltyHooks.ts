import { useContext, useEffect } from "react";
import { MakeLoyaltyContext } from "./makeLoyaltyContext";
import { useGetUserId } from "@/backend-layer/session";
import { useMakeNewLoyalty } from "@/backend-layer/loyalty";

export const useSetMakeLoyaltyThreshold = (): [
  value: number,
  (threshold: number) => void
] => {
  const context = useContext(MakeLoyaltyContext);
  return [
    context.makeLoyaltyDto.threshold,
    (threshold: number) => {
      context.dispatchState({ threshold });
    },
  ];
};
export const useSetMakeLoyaltyFreeDrink = () => {
  const context = useContext(MakeLoyaltyContext);
  return (freeDrink: string) => {
    context.dispatchState({ freeDrink });
  };
};
export const useChangeMakeLoyaltyReset = () => {
  const context = useContext(MakeLoyaltyContext);
  return () => {
    const reset = !context.makeLoyaltyDto.reset;
    context.dispatchState({ reset });
  };
};
export const useSetMakeLoyaltyDiscount = (): [
  value: number,
  (dis: number) => void
] => {
  const context = useContext(MakeLoyaltyContext);
  return [
    context.makeLoyaltyDto.discountInPercentage,
    (discountInPercentage: number) => {
      context.dispatchState({ discountInPercentage });
    },
  ];
};

export const useMakeNewLoyaltyContext = () => {
  const context = useContext(MakeLoyaltyContext);
  const makeLoylaty = useMakeNewLoyalty();
  return () => {
    makeLoylaty(context.makeLoyaltyDto);
  };
};
