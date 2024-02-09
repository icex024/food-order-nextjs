import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FoodInterface } from "./FoodInterface";
import { applyFetchAllergensAsyncExtraReducers } from "./fetchAllergensAsync";
import { appplyFetchFoodsForMenuAsync } from "./fetchFoodsForMenuAsync";
import { applyFetchRestaurantByIdAsync } from "./fetchRestaurantByIdAsync";
import { applyFetchAllIngredients } from "./fetchAllIngredients";
import { applyFetchMenusAsync } from "./fetchMenusAsync";
import { applyFetchFoodStatisticsAsync } from "./fetchFoodStatisticsAsync";
import { act } from "react-dom/test-utils";

const foodUISliceInitialState: FoodInterface = {
  allergens: [],
  foods: {},
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
  },
  extraReducers: (builder) => {
    applyFetchAllergensAsyncExtraReducers(builder);
    appplyFetchFoodsForMenuAsync(builder);
    applyFetchRestaurantByIdAsync(builder);
    applyFetchAllIngredients(builder);
    applyFetchMenusAsync(builder);
    applyFetchFoodStatisticsAsync(builder);
  },
});

export const { setRestaurantId, setStatisticsMonth, setStatisticsYear } =
  foodUISlice.actions;

export default foodUISlice.reducer;
