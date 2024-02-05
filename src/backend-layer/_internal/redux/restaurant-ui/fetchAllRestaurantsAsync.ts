import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import {
  RestaurantDto,
  RestaurantsFetchStatus,
  RestaurantsInterface,
} from "./restaurantsUiSlice";
import { AppState } from "../../store";
import { fetchAllRestaurants } from "./reastaurantsUiService";

export const fetchAllRestaurantsAsync = createAsyncThunk<
  RestaurantDto[],
  undefined,
  { state: AppState }
>("restaurantsUi/fetchAllRestaurantAsync", async () => {
  const response = await fetchAllRestaurants();

  if (response.status !== 200) {
    throw Error("Smthg went wrong");
  }
  return response.data;
});

export const applyFetchAllRestaurantsAsync = (
  builder: ActionReducerMapBuilder<RestaurantsInterface>
) => {
  builder.addCase(fetchAllRestaurantsAsync.fulfilled, (state, action) => {
    state.restaurants = action.payload;
    state.fetchStatus = RestaurantsFetchStatus.Fetched;
  });
};
