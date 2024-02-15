import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { removeMenu } from "./foodUIService";

export const removeMenuAsync = createAsyncThunk<
  undefined,
  string,
  { state: AppState }
>("foodUI/removeMenuAsync", async (menuId) => {
  const response = await removeMenu(menuId);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }

  return response.data;
});
