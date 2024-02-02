import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { cancelOrderCutsomer } from "./orderService";

export const cancelOrderCustomerAsync = createAsyncThunk<
  void,
  string,
  { state: AppState }
>("order/cancelOrderCustomerAsync", async (orderId) => {
  const response = await cancelOrderCutsomer(orderId);
  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
