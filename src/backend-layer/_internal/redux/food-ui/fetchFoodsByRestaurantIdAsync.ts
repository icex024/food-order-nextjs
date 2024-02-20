import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ViewOrderDto } from "../order/OrderInterface";
import { AppState } from "../../store";
import { getFoodsByRestaurantId } from "./foodUIService";
import { FoodDto, FoodInterface } from "./FoodInterface";

export const fetchFoodsByRestaurantIdAsync = createAsyncThunk<
  FoodDto[],
  string,
  { state: AppState }
>("food/fetchFoodsByRestaurantIdAsync", async (restaurantId) => {
  const response = await getFoodsByRestaurantId(restaurantId);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }

  return response.data;
});

export const applyFetchFoodsByRestaurantIdAsync = (
  builder: ActionReducerMapBuilder<FoodInterface>
) => [
  builder.addCase(fetchFoodsByRestaurantIdAsync.fulfilled, (state, action) => {
    action.payload.forEach((order) => {
      state.foods[order.menuId].push(order);
    });
    state.foodsFetchStatus = "FETCHED";
  }),
  builder.addCase(fetchFoodsByRestaurantIdAsync.rejected, (state) => {
    state.foodsFetchStatus = "REJECTED";
  }),
  builder.addCase(fetchFoodsByRestaurantIdAsync.pending, (state) => {
    state.foodsFetchStatus = "PENDING";
  }),
];
