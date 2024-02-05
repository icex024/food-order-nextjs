import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { FoodDto, FoodInterface } from "./FoodInterface";
import { AppState } from "../../store";
import { getFoodsForMenu } from "./foodUIService";

export const fetchFoodsForMenuAsync = createAsyncThunk<
  FoodDto[],
  { menuId: string },
  { state: AppState }
>("foodUI/fetchFoodsForMenuAsync", async ({ menuId }, thunkApi) => {
  const response = await getFoodsForMenu(menuId);
  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }
  return response.data;
});

export function appplyFetchFoodsForMenuAsync(
  builder: ActionReducerMapBuilder<FoodInterface>
) {
  builder.addCase(fetchFoodsForMenuAsync.fulfilled, (state, action) => {
    state.foods[action.meta.arg.menuId] = action.payload;
  });
}
