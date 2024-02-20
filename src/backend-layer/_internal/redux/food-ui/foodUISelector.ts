import { AppState } from "../../store";
import { IngredientDto } from "./FoodInterface";

export const selectAllergens = (state: AppState) => state.foodUI.allergens;

export const selectFoods = (state: AppState) => state.foodUI.foods;

export const selectedRestaurant = (state: AppState) => state.foodUI.restaurant;

export const selectedRestaurantId = (state: AppState) =>
  state.foodUI.restaurantId;

export const selectedMenus = (state: AppState) => state.foodUI.menus;

export const selectedFoodsByMenuId = (state: AppState, menuId: string) =>
  state.foodUI.foods[menuId];

export const allergenById = (state: AppState, allergenId: string) =>
  state.foodUI.allergens.find((allergen) => allergen.id === allergenId);

export const ingredientByIds = (state: AppState, ingredientIds: string[]) => {
  let retVal: IngredientDto[] = [];
  ingredientIds.forEach((ingredientId) => {
    const ingredient = state.foodUI.ingredients.find(
      (ingredient) => ingredient.id === ingredientId
    );

    if (typeof ingredient !== "undefined") {
      retVal.push(ingredient);
    }
  });
  return retVal;
};

export const foodStatistics = (state: AppState) => state.foodUI.foodStatistics;

export const selectedFoodStatisticsMonth = (state: AppState) =>
  state.foodUI.foodStatisticsMonth;

export const selectedFoodStatisticsYear = (state: AppState) =>
  state.foodUI.foodStatisticsYear;

export const menusManagerFetchStatus = (state: AppState) =>
  state.foodUI.menusManagerFetchStatus;

export const ingredientFetchStatus = (state: AppState) =>
  state.foodUI.ingredientsFetchStatus;

export const allIngredients = (state: AppState) => state.foodUI.ingredients;

export const foodsFetchStatus = (state: AppState) =>
  state.foodUI.foodsFetchStatus;
