import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { updateFoodPrice } from "./foodUIService";

export const updateFoodPriceAsync = createAsyncThunk<
  undefined,
  { foodId: string; newPrice: number },
  { state: AppState }
>("foodUI/updateFoodPriceAsync", async ({ foodId, newPrice }) => {
  const response = await updateFoodPrice(foodId, newPrice);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
