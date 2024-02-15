import { useContext } from "react";
import { MakeIngredientContext } from "./makeIngredientContext";
import { useAddIngredient } from "@/backend-layer/food-ui";

export const useSetIngredientName = (): [string, (name: string) => void] => {
  const context = useContext(MakeIngredientContext);

  return [
    context.makeIngredientDto.name,
    (name: string) => {
      context.dispatchState({ name });
    },
  ];
};

export const useSetIngredientMeatFree = (): [boolean, () => void] => {
  const context = useContext(MakeIngredientContext);

  return [
    context.makeIngredientDto.meatFree,
    () => {
      const meatFree = !context.makeIngredientDto.meatFree;
      context.dispatchState({ meatFree });
    },
  ];
};

export const useAddIngredientsAllergen = () => {
  const context = useContext(MakeIngredientContext);

  return (allergenId: string) => {
    const allergenIds = context.makeIngredientDto.allergenIds;
    allergenIds.push(allergenId);
    context.dispatchState({ allergenIds });
  };
};

export const useRemoveIngredientsAllergen = () => {
  const context = useContext(MakeIngredientContext);

  return (allergenId: string) => {
    context.dispatchState({
      allergenIds: context.makeIngredientDto.allergenIds.filter(
        (allergen) => allergen !== allergenId
      ),
    });
  };
};

export const useAddIngredientContext = () => {
  const context = useContext(MakeIngredientContext);
  const addIngredient = useAddIngredient();
  return () => {
    addIngredient(context.makeIngredientDto);
  };
};
