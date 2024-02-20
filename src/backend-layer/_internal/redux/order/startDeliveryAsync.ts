import { createAsyncThunk } from "@reduxjs/toolkit";
import { StartDeliveryDto, startDeliveries } from "./orderService";
import { AppState } from "../../store";

export const startDeliveryAsync = createAsyncThunk<
  undefined,
  StartDeliveryDto,
  { state: AppState }
>("order/startDeliveryAsync", async (dto) => {
  const response = await startDeliveries(dto);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
