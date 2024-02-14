import { useContext } from "react";
import { FoodTypeEnum, NewItemContext } from "./makeNewItemContext";
import { useCreateFood } from "@/backend-layer/food-ui";

export const useSetNewItemName = (): [string, (value: string) => void] => {
  const context = useContext(NewItemContext);
  return [
    context.makeItemDto.name,
    (name: string) => {
      context.dispatchState({ name });
    },
  ];
};

export const useSetNewItemDescription = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewItemContext);
  return [
    context.makeItemDto.description,
    (description: string) => {
      context.dispatchState({ description });
    },
  ];
};

export const useSetNewItemType = (): [
  string,
  (value: FoodTypeEnum) => void
] => {
  const context = useContext(NewItemContext);
  return [
    context.makeItemDto.name,
    (foodType: FoodTypeEnum) => {
      context.dispatchState({ foodType });
    },
  ];
};
export const useSetNewItemEstimatedTime = (): [
  number,
  (value: number) => void
] => {
  const context = useContext(NewItemContext);
  return [
    context.makeItemDto.estimatedTime,
    (estimatedTime: number) => {
      context.dispatchState({ estimatedTime });
    },
  ];
};
export const useSetNewItemPrice = (): [number, (value: number) => void] => {
  const context = useContext(NewItemContext);
  return [
    context.makeItemDto.price,
    (price: number) => {
      context.dispatchState({ price });
    },
  ];
};
export const useSetNewItemMeatFree = (): [boolean, () => void] => {
  const context = useContext(NewItemContext);
  return [
    context.makeItemDto.meatFree,
    () => {
      const meatFree = !context.makeItemDto.meatFree;
      context.dispatchState({ meatFree });
    },
  ];
};

export const useAddNewItemIngredient = () => {
  const context = useContext(NewItemContext);
  return (ingredientId: string) => {
    const ingredients = context.makeItemDto.ingredients;
    ingredients.push(ingredientId);
    context.dispatchState({ ingredients });
  };
};

export const useRemoveNewItemIngredient = () => {
  const context = useContext(NewItemContext);
  return (ingredientId: string) => {
    const ingredients = context.makeItemDto.ingredients;
    ingredients.filter((ingredient) => ingredient !== ingredientId);
    context.dispatchState({ ingredients });
  };
};

export const useSetNewItemImage = () => {
  const context = useContext(NewItemContext);
  return (image: any) => {
    context.dispatchImage(image);
  };
};

export const useSelectedIngredients = () => {
  const context = useContext(NewItemContext);
  const retValue: { [key in string]: boolean } = {};
  context.makeItemDto.ingredients.forEach((ingredient) => retValue[ingredient]);
  return retValue;
};

export const useCreateFoodContext = () => {
  const context = useContext(NewItemContext);
  const createFood = useCreateFood();
  return () => {
    createFood(context.makeItemDto, context.image);
    console.log(context.makeItemDto);
  };
};
