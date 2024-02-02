import { useAppSelector } from "../../store";
import { useSetPrice } from "../order/useSetPrice";
import { selectFoods } from "./foodUISelector";

export const useCalculatePrice = (foodIds: string[]) => {
  let price: number = 0;
  const foods = useAppSelector(selectFoods);
  Object.keys(foods).forEach((key) => {
    foodIds.forEach((foodId) => {
      const food = foods[key].find((food) => food.id === foodId);
      if (food) {
        price = price + food.price;
      }
    });
  });
  useSetPrice(price);
  return price;
};
