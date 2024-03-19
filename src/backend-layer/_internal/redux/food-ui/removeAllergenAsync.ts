import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { removeAllergen } from "./foodUIService";

export const removeAllergenAsync = createAsyncThunk<
  undefined,
  string,
  { state: AppState }
>("foodUI/removeAllergenAsync", async (allergenId) => {
  const response = await removeAllergen(allergenId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
