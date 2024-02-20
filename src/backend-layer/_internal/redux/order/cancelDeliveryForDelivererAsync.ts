import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import {
  DelivererCancelOrderDto,
  cancelDeliveryDeliverer,
} from "./orderService";

export const cancelDeliveryForDelivererAsync = createAsyncThunk<
  undefined,
  DelivererCancelOrderDto,
  { state: AppState }
>("order/cancelDeliveryForDelivererAsync", async (dto) => {
  const response = await cancelDeliveryDeliverer(dto);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
