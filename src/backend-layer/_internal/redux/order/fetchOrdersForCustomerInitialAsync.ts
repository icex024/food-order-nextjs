import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { OrderInterface, ViewOrderDto } from "./OrderInterface";
import { fetchOrdersForCustomerInitial } from "./orderService";
import { AppState } from "../../store";

export const fetchOrdersForCustomerInitialAsync = createAsyncThunk<
  ViewOrderDto[],
  { customerId: string },
  { state: AppState }
>("order/fetchOrdersForCustomerInitialAsync", async ({ customerId }) => {
  const response = await fetchOrdersForCustomerInitial(customerId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchOrdersForCustomerInitialAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(
    fetchOrdersForCustomerInitialAsync.fulfilled,
    (state, action) => {
      state.viewOrders = action.payload;
      state.viewCustomerOrdersInitialFetchStatus = "FETCHED";
    }
  );
  builder.addCase(
    fetchOrdersForCustomerInitialAsync.pending,
    (state, action) => {
      state.viewCustomerOrdersInitialFetchStatus = "PENDING";
    }
  );
  builder.addCase(
    fetchOrdersForCustomerInitialAsync.rejected,
    (state, action) => {
      state.viewCustomerOrdersInitialFetchStatus = "REJECTED";
    }
  );
};
