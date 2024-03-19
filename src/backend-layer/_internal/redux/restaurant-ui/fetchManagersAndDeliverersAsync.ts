import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ManagerOrDeliverePreview,
  RestaurantsInterface,
} from "./restaurantsUiSlice";
import { AppState } from "../../store";
import { getManagersAndDeliverers } from "./reastaurantsUiService";

export const fetchManagersAndDeliverersAsync = createAsyncThunk<
  ManagerOrDeliverePreview[],
  undefined,
  { state: AppState }
>("restaurantUI/fetchManagersAndDeliverersAsync", async () => {
  const response = await getManagersAndDeliverers();

  if (response.status !== 200) {
    throw Error("Smthg went wrong");
  }

  return response.data;
});

export const applyFetchManagersAndDeliverersAsync = (
  builder: ActionReducerMapBuilder<RestaurantsInterface>
) => {
  builder.addCase(
    fetchManagersAndDeliverersAsync.fulfilled,
    (state, action) => {
      state.users = action.payload;
      state.usersFetchStatus = "FETCHED";
    }
  );
  builder.addCase(fetchManagersAndDeliverersAsync.rejected, (state) => {
    state.usersFetchStatus = "REJECTED";
  });
  builder.addCase(fetchManagersAndDeliverersAsync.pending, (state) => {
    state.usersFetchStatus = "PENDING";
  });
};
