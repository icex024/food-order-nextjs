import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { FoodInterface, MenuDto } from "./FoodInterface";
import { getMenusForRestaurant } from "./foodUIService";

export const fetchMenusAsync = createAsyncThunk<
  MenuDto[],
  { restaurantId: string },
  { state: AppState }
>("food-ui/fetchMenusAsync", async ({ restaurantId }) => {
  const response = await getMenusForRestaurant(restaurantId);

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
    state.menusCustomerFetchStatus = "FETCHED";
  });
  builder.addCase(fetchMenusAsync.rejected, (state) => {
    state.menusCustomerFetchStatus = "REJECTED";
  });
  builder.addCase(fetchMenusAsync.pending, (state) => {
    state.menusCustomerFetchStatus = "PENDING";
  });
};
