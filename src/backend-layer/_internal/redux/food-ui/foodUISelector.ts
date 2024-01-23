import { AppState } from "../../store";

export const selectAllergens = (state: AppState) => state.foodUI.allergens;

export const selectFoods = (state: AppState) => state.foodUI.foods;
