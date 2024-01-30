import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { FoodInterface, MenuDto } from "./FoodInterface";
import { getMenusForRestaurant } from "./foodUIService";

export const fetchMenusAsync = createAsyncThunk<
  MenuDto[],
  { id: string },
  { state: AppState }
>("food-ui/fetchMenusAsync", async ({ id }) => {
  const response = await getMenusForRestaurant(id);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }

  return response.data;
});

export const applyFetchMenusAsync = (
  builder: ActionReducerMapBuilder<FoodInterface>
) => {
  builder.addCase(fetchMenusAsync.fulfilled, (state, action) => {
    state.menus = action.payload;
  });
};
