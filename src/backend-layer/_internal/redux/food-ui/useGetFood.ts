import { useAppSelector } from "../../store";
import { FoodDto } from "./FoodInterface";
import { selectFoods } from "./foodUISelector";

export const useGetFood = (foodId: string) => {
  const foods = useAppSelector(selectFoods);
  let food: FoodDto = {
    id: "",
    name: "",
    description: "",
    ingredients: [],
    estimatedTime: 0,
    foodType: "",
    meatFree: false,
    price: 0,
    menuId: "",
    image: null,
  };
  Object.keys(foods).forEach((key) => {
    const flag = foods[key].find((food) => food.id === foodId);
    if (typeof flag !== "undefined") {
      food = flag;
    }
  });
  return food;
};
