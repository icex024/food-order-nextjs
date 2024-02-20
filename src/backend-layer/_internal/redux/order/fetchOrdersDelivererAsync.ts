import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { OrderInterface, ViewOrderDto } from "./OrderInterface";
import { AppState } from "../../store";
import { fetchOrdersForDeliverer } from "./orderService";

export const fetchOrdersDelivererAsync = createAsyncThunk<
  ViewOrderDto[],
  string,
  { state: AppState }
>("order/fetchOrdersDelivererAsync", async (delivererId) => {
  const response = await fetchOrdersForDeliverer(delivererId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchOrdersDelivererAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(fetchOrdersDelivererAsync.fulfilled, (state, action) => {
    state.viewOrdersDeliverer = action.payload;
    state.viewOrdersDelivererFetchStatus = "FETCHED";
  });
  builder.addCase(fetchOrdersDelivererAsync.pending, (state) => {
    state.viewOrdersDelivererFetchStatus = "PENDING";
  });
  builder.addCase(fetchOrdersDelivererAsync.rejected, (state) => {
    state.viewOrdersDelivererFetchStatus = "REJECTED";
  });
};
