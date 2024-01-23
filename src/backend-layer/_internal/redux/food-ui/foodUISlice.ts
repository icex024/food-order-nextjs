import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FoodInterface } from "./FoodInterface";
import { applyFetchAllergensAsyncExtraReducers } from "./fetchAllergensAsync";
import { appplyFetchFoodsForMenuAsync } from "./fetchFoodsForMenuAsync";
import { applyFetchRestaurantByIdAsync } from "./fetchRestaurantByIdAsync";
import { applyFetchAllIngredients } from "./fetchAllIngredients";

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
};

export const foodUISlice = createSlice({
  name: "foodUI",
  initialState: foodUISliceInitialState,
  reducers: {
    setRestaurantId: (state, action: PayloadAction<string>) => {
      state.restaurantId = action.payload;
    },
  },
  extraReducers: (builder) => {
    applyFetchAllergensAsyncExtraReducers(builder);
    appplyFetchFoodsForMenuAsync(builder);
    applyFetchRestaurantByIdAsync(builder);
    applyFetchAllIngredients(builder);
  },
});

export const { setRestaurantId } = foodUISlice.actions;

export default foodUISlice.reducer;
