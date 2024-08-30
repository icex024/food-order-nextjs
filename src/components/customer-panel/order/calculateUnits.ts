import { FoodForOrderDto } from "@/backend-layer/_internal/redux/order/OrderInterface";

export function calculateUnits(foods: FoodForOrderDto[]) {
  const foodDictionary: {
    [key in string]: { id: string; name: string; units: number };
  } = {};
  foods.forEach((food) =>
    foodDictionary[food.id]
      ? (foodDictionary[food.id] = {
          ...food,
          units: foodDictionary[food.id].units + 1,
        })
      : (foodDictionary[food.id] = { ...food, units: 1 })
  );
  return foodDictionary;
}
