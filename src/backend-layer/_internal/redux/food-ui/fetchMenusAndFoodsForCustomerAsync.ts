import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { FoodDto, FoodInterface } from "./FoodInterface";
import { AppState } from "../../store";
import { getMenusAndFoods } from "./foodUIService";

interface MenuAndFoodDto {
  id: string;
  name: string;
  foods: FoodDto[];
}

export const fetchMenusAndFoodsForCustomerAsync = createAsyncThunk<
  MenuAndFoodDto[],
  string,
  { state: AppState }
>("foodUI/fetchMenusAndFoodsAsync", async (restaurantId) => {
  const response = await getMenusAndFoods(restaurantId);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }

  return response.data;
});

export const applyFetchMenusAndFoodsForCustomerAsync = (
  builder: ActionReducerMapBuilder<FoodInterface>
) => {
  builder.addCase(
    fetchMenusAndFoodsForCustomerAsync.fulfilled,
    (state, action) => {
      action.payload.forEach((menu) => {
        state.menus.push({ id: menu.id, name: menu.name });
        state.foods[menu.id] = menu.foods;
      });
      state.menusCustomerFetchStatus = "FETCHED";
    }
  );
  builder.addCase(fetchMenusAndFoodsForCustomerAsync.pending, (state) => {
    state.menusCustomerFetchStatus = "PENDING";
  });
  builder.addCase(fetchMenusAndFoodsForCustomerAsync.rejected, (state) => {
    state.menusCustomerFetchStatus = "REJECTED";
  });
};
