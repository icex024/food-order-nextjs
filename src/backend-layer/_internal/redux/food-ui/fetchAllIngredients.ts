import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { FoodInterface, IngredientDto } from "./FoodInterface";
import { getAllIngredients } from "./foodUIService";
import { AppState } from "../../store";

export const fetchAllIngredients = createAsyncThunk<
  IngredientDto[],
  undefined,
  { state: AppState }
>("foodUI/fetchAllIngredients", async () => {
  const response = await getAllIngredients();

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }
  return response.data;
});

export const applyFetchAllIngredients = (
  builder: ActionReducerMapBuilder<FoodInterface>
) => {
  builder.addCase(fetchAllIngredients.fulfilled, (state, action) => {
    state.ingredients = action.payload;
  });
};
