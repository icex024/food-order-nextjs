import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { FoodInterface, RestaurantDto } from "./FoodInterface";
import { AppState } from "../../store";
import { getRestaurantById } from "./foodUIService";
import { fetchFoodsForMenuAsync } from "./fetchFoodsForMenuAsync";

export const fetchRestaurantByIdAsync = createAsyncThunk<
  RestaurantDto,
  string,
  { state: AppState }
>("foodUI/fetchRestaurantByIdAsync", async (restaurnatId) => {
  const response = await getRestaurantById(restaurnatId);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }
  return response.data;
});

export function applyFetchRestaurantByIdAsync(
  builder: ActionReducerMapBuilder<FoodInterface>
) {
  builder.addCase(fetchRestaurantByIdAsync.fulfilled, (state, action) => {
    state.restaurant = action.payload;
  });
}
