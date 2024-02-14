import { MakeIngredientDto } from "@/components/manager-panel/page-components/make-ingredient-store/makeIngredientContext";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { addIngredient } from "./foodUIService";

export const addIngredientAsync = createAsyncThunk<
  undefined,
  MakeIngredientDto,
  { state: AppState }
>("foodUI/addIngredientAsync", async (dto) => {
  const response = await addIngredient(dto);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
