import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { OrderInterface, ViewOrderDto } from "./OrderInterface";
import { AppState } from "../../store";
import { fetchOrdersForDelivererInDelivery } from "./orderService";

export const fetchOrdersDelivererInDeliveryAsync = createAsyncThunk<
  ViewOrderDto[],
  string,
  { state: AppState }
>("order/fetchOrdersDelivererInDeliveryAsync", async (delivererId) => {
  const response = await fetchOrdersForDelivererInDelivery(delivererId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchOrdersDelivererInDeliveryAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(
    fetchOrdersDelivererInDeliveryAsync.fulfilled,
    (state, action) => {
      state.viewOrdersDelivererInDelivery = action.payload;
      state.viewOrdersDelivererInDeliveryFetchStatus = "FETCHED";
    }
  );
  builder.addCase(fetchOrdersDelivererInDeliveryAsync.pending, (state) => {
    state.viewOrdersDelivererInDeliveryFetchStatus = "PENDING";
  });
  builder.addCase(fetchOrdersDelivererInDeliveryAsync.rejected, (state) => {
    state.viewOrdersDelivererInDeliveryFetchStatus = "REJECTED";
  });
};
