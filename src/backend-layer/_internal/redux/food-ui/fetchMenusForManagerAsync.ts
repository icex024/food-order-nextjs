import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { getMenusForManager } from "./foodUIService";
import { FoodInterface, MenuDto } from "./FoodInterface";

export const fetchMenusForManagerAsync = createAsyncThunk<
  MenuDto[],
  string,
  { state: AppState }
>("foodUI/fetchMenusForManagerAsync", async (managerId) => {
  const response = await getMenusForManager(managerId);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }

  return response.data;
});

export const applyFetchMenusForManagerAsync = (
  builder: ActionReducerMapBuilder<FoodInterface>
) => {
  builder.addCase(fetchMenusForManagerAsync.fulfilled, (state, action) => {
    state.menus = action.payload;
    state.menusManagerFetchStatus = "FETCHED";
  });
  builder.addCase(fetchMenusForManagerAsync.rejected, (state) => {
    state.menusManagerFetchStatus = "REJECTED";
  });
  builder.addCase(fetchMenusForManagerAsync.pending, (state) => {
    state.menusManagerFetchStatus = "PENDING";
  });
};
