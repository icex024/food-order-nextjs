import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { ViewOrderDto } from "../order/OrderInterface";
import { AppState } from "../../store";
import { getFoodsByUserId } from "./foodUIService";
import { FoodDto, FoodInterface } from "./FoodInterface";

export const fetchFoodsByUserIdAsync = createAsyncThunk<
  FoodDto[],
  string,
  { state: AppState }
>("food/fetchFoodsByUserIdAsync", async (restaurantId) => {
  const response = await getFoodsByUserId(restaurantId);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }

  return response.data;
});

export const applyFetchFoodsByUserIdAsync = (
  builder: ActionReducerMapBuilder<FoodInterface>
) => [
  builder.addCase(fetchFoodsByUserIdAsync.fulfilled, (state, action) => {
    let dict: { [key in string]: FoodDto[] } = {};
    action.payload.forEach((order) => {
      dict[order.menuId]
        ? dict[order.menuId].push(order)
        : (dict[order.menuId] = [order]);
    });
    state.foods = dict;
    state.foodsFetchStatus = "FETCHED";
  }),
  builder.addCase(fetchFoodsByUserIdAsync.rejected, (state) => {
    state.foodsFetchStatus = "REJECTED";
  }),
  builder.addCase(fetchFoodsByUserIdAsync.pending, (state) => {
    state.foodsFetchStatus = "PENDING";
  }),
];
