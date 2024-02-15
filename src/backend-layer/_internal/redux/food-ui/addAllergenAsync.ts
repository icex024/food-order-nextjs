import { createAsyncThunk } from "@reduxjs/toolkit";
import { addAllergen } from "./foodUIService";
import { AppState } from "../../store";

export const addAllergenAsync = createAsyncThunk<
  undefined,
  string,
  { state: AppState }
>("foodUI/addAllergenAsync", async (name) => {
  const response = await addAllergen(name);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
