import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { removeFood } from "./foodUIService";

export const removeFoodAsync = createAsyncThunk<
  undefined,
  string,
  { state: AppState }
>("foodUI/removeFoodAsync", async (foodId) => {
  const response = await removeFood(foodId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
