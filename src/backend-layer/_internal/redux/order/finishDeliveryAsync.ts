import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { finishDelivery } from "./orderService";

export const finishDeliveryAsync = createAsyncThunk<
  undefined,
  string,
  { state: AppState }
>("order/finishDeliveryAsync", async (orderId) => {
  const response = await finishDelivery(orderId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
