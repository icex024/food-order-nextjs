import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { OrderInterface, ViewOrderDto } from "./OrderInterface";
import { AppState } from "../../store";
import { fetchOrdersForDelivererTaken } from "./orderService";

export const fetchOrdersDelivererTakenAsync = createAsyncThunk<
  ViewOrderDto[],
  string,
  { state: AppState }
>("order/fetchOrdersDelivererTakenAsync", async (delivererId) => {
  const response = await fetchOrdersForDelivererTaken(delivererId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchOrdersDelivererTakenAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(fetchOrdersDelivererTakenAsync.fulfilled, (state, action) => {
    state.viewOrdersDelivererTaken = action.payload;
    state.viewOrdersDelivererTakenFetchStatus = "FETCHED";
  });
  builder.addCase(fetchOrdersDelivererTakenAsync.pending, (state) => {
    state.viewOrdersDelivererTakenFetchStatus = "PENDING";
  });
  builder.addCase(fetchOrdersDelivererTakenAsync.rejected, (state) => {
    state.viewOrdersDelivererTakenFetchStatus = "REJECTED";
  });
};
