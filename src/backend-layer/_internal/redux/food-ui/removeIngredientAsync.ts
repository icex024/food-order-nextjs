import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { removeIngredient } from "./foodUIService";

export const removeIngredientAsync = createAsyncThunk<
  undefined,
  string,
  { state: AppState }
>("foodUI/removeIngredientAsync", async (ingredientId) => {
  const response = await removeIngredient(ingredientId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
