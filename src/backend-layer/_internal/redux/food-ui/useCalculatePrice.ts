import { useAppSelector } from "../../store";
import { selectedFoods } from "../order/orderSelectors";
import { useSetPrice } from "../order/useSetPrice";

export const useCalculatePrice = () => {
  let price: number = 0;
  const foods = useAppSelector(selectedFoods);
  foods.forEach((food) => {
    price += food.price;
  });
  useSetPrice(price);
  return price;
};
