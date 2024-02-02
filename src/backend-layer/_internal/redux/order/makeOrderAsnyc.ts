import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { CreateOrderDto, OrderInterface } from "./OrderInterface";
import { AppState } from "../../store";
import { makeOrder } from "./orderService";

export const makeOrderAsync = createAsyncThunk<
  string,
  undefined,
  { state: AppState }
>("order/makeOrderAsync", async (_, thunkApi) => {
  const response = await makeOrder(thunkApi.getState().order.craeteOrder);
  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }
  return response.data;
});

export const applyMakeOrderAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(makeOrderAsync.fulfilled, (state, action) => {
    state.createOrderResponse = action.payload;
  });
};
