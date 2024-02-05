import { createSlice } from "@reduxjs/toolkit";
import { applyFetchAllRestaurantsAsync } from "./fetchAllRestaurantsAsync";

export interface RestaurantsInterface {
  restaurants: RestaurantDto[];
  fetchStatus: RestaurantsFetchStatus;
}

export interface RestaurantDto {
  id: string;
  name: string;
  description: string;
  workTimeStart: string;
  workTimeEnd: string;
  image: any;
}

export enum RestaurantsFetchStatus {
  Fetched = "Fetched",
  NotFetched = "NotFetched",
}

const initialState: RestaurantsInterface = {
  restaurants: [],
  fetchStatus: RestaurantsFetchStatus.NotFetched,
};

const restaurantsUiSlice = createSlice({
  initialState: initialState,
  name: "restaurantsUi",
  reducers: {},
  extraReducers: (builder) => {
    applyFetchAllRestaurantsAsync(builder);
  },
});

export const {} = restaurantsUiSlice.actions;

export default restaurantsUiSlice.reducer;
