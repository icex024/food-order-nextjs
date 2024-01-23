import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AllergenDto, FoodInterface } from "./FoodInterface";
import { AppState } from "../../store";
import { getAllergens } from "./foodUIService";

export const fetchAllergensAsync = createAsyncThunk<
  AllergenDto[],
  undefined,
  { state: AppState }
>("foodUI/fetchAllergensAsync", async () => {
  const response = await getAllergens();
  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }
  return response.data;
});

export function applyFetchAllergensAsyncExtraReducers(
  builder: ActionReducerMapBuilder<FoodInterface>
) {
  builder.addCase(fetchAllergensAsync.fulfilled, (state, action) => {
    state.allergens = action.payload;
  });
}
