import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { OrderInterface, ViewOrderDto } from "./OrderInterface";
import { AppState } from "../../store";
import { fetchOrderForCustomerHistory } from "./orderService";

export const fetchOrdersForCustomerHistoryAsync = createAsyncThunk<
  ViewOrderDto[],
  { customerId: string },
  { state: AppState }
>("order/fetchOrdersForCustomerHisotryAsync", async ({ customerId }) => {
  const response = await fetchOrderForCustomerHistory(customerId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchOrdersForCustomerHistoryAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(
    fetchOrdersForCustomerHistoryAsync.fulfilled,
    (state, action) => {
      state.viewOrdersHistory = action.payload;
      state.viewCustomerOrdersHistoryFetchStatus = "FETCHED";
    }
  );
  builder.addCase(
    fetchOrdersForCustomerHistoryAsync.pending,
    (state, action) => {
      state.viewCustomerOrdersHistoryFetchStatus = "PENDING";
    }
  );
  builder.addCase(
    fetchOrdersForCustomerHistoryAsync.rejected,
    (state, action) => {
      state.viewCustomerOrdersHistoryFetchStatus = "REJECTED";
    }
  );
};
