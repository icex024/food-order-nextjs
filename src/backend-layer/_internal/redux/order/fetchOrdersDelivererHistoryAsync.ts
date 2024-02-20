import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { OrderInterface, ViewOrderDto } from "./OrderInterface";
import { AppState } from "../../store";
import {
  fetchOrdersForDelivererHistory,
  fetchOrdersForDelivererInDelivery,
} from "./orderService";

export const fetchOrdersDelivererHistoryAsync = createAsyncThunk<
  ViewOrderDto[],
  string,
  { state: AppState }
>("order/fetchOrdersDelivererHistoryAsync", async (delivererId) => {
  const response = await fetchOrdersForDelivererHistory(delivererId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchOrdersDelivererHistoryAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(
    fetchOrdersDelivererHistoryAsync.fulfilled,
    (state, action) => {
      state.viewOrdersDelivererHistory = action.payload;
      state.viewOrdersDelivererHistoryFetchStatus = "FETCHED";
    }
  );
  builder.addCase(fetchOrdersDelivererHistoryAsync.pending, (state) => {
    state.viewOrdersDelivererHistoryFetchStatus = "PENDING";
  });
  builder.addCase(fetchOrdersDelivererHistoryAsync.rejected, (state) => {
    state.viewOrdersDelivererHistoryFetchStatus = "REJECTED";
  });
};
