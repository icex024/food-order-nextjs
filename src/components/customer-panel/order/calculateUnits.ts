export function calculateUnits(foodIds: string[]) {
  const foodDictionary: { [key in string]: number } = {};
  foodIds.forEach((food) =>
    foodDictionary[food]
      ? (foodDictionary[food] = foodDictionary[food] + 1)
      : (foodDictionary[food] = 1)
  );
  return foodDictionary;
}
