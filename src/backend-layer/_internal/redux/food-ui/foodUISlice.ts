import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllergenDto, FoodInterface, IngredientDto } from "./FoodInterface";
import { applyFetchAllergensAsyncExtraReducers } from "./fetchAllergensAsync";
import { appplyFetchFoodsForMenuAsync } from "./fetchFoodsForMenuAsync";
import { applyFetchRestaurantByIdAsync } from "./fetchRestaurantByIdAsync";
import { applyFetchAllIngredients } from "./fetchAllIngredients";
import { applyFetchMenusAsync } from "./fetchMenusAsync";
import { applyFetchFoodStatisticsAsync } from "./fetchFoodStatisticsAsync";
import { act } from "react-dom/test-utils";
import { applyFetchMenusForManagerAsync } from "./fetchMenusForManagerAsync";
import { start } from "repl";
import { applyFetchFoodsByUserIdAsync } from "./fetchFoodsByUserIdAsync";

const foodUISliceInitialState: FoodInterface = {
  allergens: [],
  foods: {},
  foodsFetchStatus: "NOTFETCHED",
  restaurantId: "",
  restaurant: {
    city: "",
    country: "",
    description: "",
    driverIds: [],
    id: "",
    image: null,
    latitude: 0,
    longitude: 0,
    loyaltyDefinitionIds: [],
    managerIds: [],
    menuIds: [],
    name: "",
    streetName: "",
    streetNumber: "",
    workTimeEnd: "",
    workTimeStart: "",
  },
  ingredients: [],
  menus: [],
  foodStatistics: [],
  foodStatisticsMonth: 0,
  foodStatisticsYear: 0,
  menusManagerFetchStatus: "NOTFETCHED",
  ingredientsFetchStatus: "NOTFETCHED",
};

export const foodUISlice = createSlice({
  name: "foodUI",
  initialState: foodUISliceInitialState,
  reducers: {
    setRestaurantId: (state, action: PayloadAction<string>) => {
      state.restaurantId = action.payload;
    },
    setStatisticsMonth: (state, action: PayloadAction<number>) => {
      state.foodStatisticsMonth = action.payload;
    },
    setStatisticsYear: (state, action: PayloadAction<number>) => {
      state.foodStatisticsYear = action.payload;
    },
    removeMenuSlice: (state, action: PayloadAction<string>) => {
      state.menus = state.menus.filter((menu) => menu.id !== action.payload);
    },
    removeFoodFromMenu: (
      state,
      action: PayloadAction<{ foodId: string; menuId: string }>
    ) => {
      state.foods[action.payload.menuId] = state.foods[
        action.payload.menuId
      ].filter((food) => food.id !== action.payload.foodId);
    },
    updateFoodPriceSlice: (
      state,
      action: PayloadAction<{
        foodId: string;
        menuId: string;
        newPrice: number;
      }>
    ) => {
      state.foods[action.payload.menuId] = state.foods[
        action.payload.menuId
      ].map((food) => {
        if (food.id === action.payload.foodId) {
          food.price = action.payload.newPrice;
          return food;
        }
        return food;
      });
    },
    changeMenu: (
      state,
      action: PayloadAction<{
        foodId: string;
        newMenuId: string;
        oldMenuId: string;
      }>
    ) => {
      const oldMenu = state.foods[action.payload.oldMenuId];
      const food = oldMenu.find((food) => food.id === action.payload.foodId);
      state.foods[action.payload.oldMenuId] = oldMenu.filter(
        (food) => food.id !== action.payload.foodId
      );
      if (typeof food !== "undefined") {
        state.foods[action.payload.newMenuId].push(food);
      }
    },
    deleteAllergen: (state, action: PayloadAction<string>) => {
      state.allergens = state.allergens.filter(
        (allergen) => allergen.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    applyFetchAllergensAsyncExtraReducers(builder);
    appplyFetchFoodsForMenuAsync(builder);
    applyFetchRestaurantByIdAsync(builder);
    applyFetchAllIngredients(builder);
    applyFetchMenusAsync(builder);
    applyFetchFoodStatisticsAsync(builder);
    applyFetchMenusForManagerAsync(builder);
    applyFetchFoodsByUserIdAsync(builder);
  },
});

export const {
  setRestaurantId,
  setStatisticsMonth,
  setStatisticsYear,
  removeMenuSlice,
  removeFoodFromMenu,
  updateFoodPriceSlice,
  changeMenu,
  deleteAllergen,
} = foodUISlice.actions;

export default foodUISlice.reducer;
