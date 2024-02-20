import { createAsyncThunk } from "@reduxjs/toolkit";
import { DelivererTakeOrderDto, takeOrder } from "./orderService";
import { AppState } from "../../store";

export const takeOrderAsync = createAsyncThunk<
  undefined,
  DelivererTakeOrderDto,
  { state: AppState }
>("order/takeOrderAsync", async (dto) => {
  const response = await takeOrder(dto);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
