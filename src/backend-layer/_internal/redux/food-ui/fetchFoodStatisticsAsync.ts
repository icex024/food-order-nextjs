import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { FoodInterface, FoodStatisticsDto } from "./FoodInterface";
import { AppState } from "../../store";
import { getFoodStatistics } from "./foodUIService";

export const fetchFoodStatisticsAsync = createAsyncThunk<
  FoodStatisticsDto[],
  { managerId: string; date: string },
  { state: AppState }
>("foodUI/fetchFoodStatisticsAsync", async ({ managerId, date }) => {
  const response = await getFoodStatistics(managerId, date);
  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }
  return response.data;
});

export const applyFetchFoodStatisticsAsync = (
  builder: ActionReducerMapBuilder<FoodInterface>
) => {
  builder.addCase(fetchFoodStatisticsAsync.fulfilled, (state, action) => {
    state.foodStatistics = action.payload;
  });
};
