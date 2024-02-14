import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddOrChangeFoodFromMenuDto,
  changeFoodFromOneMenuToAnother,
} from "./foodUIService";
import { AppState } from "../../store";

export const changeMenusAsync = createAsyncThunk<
  undefined,
  AddOrChangeFoodFromMenuDto,
  { state: AppState }
>("foodUI/changeMenusAsync", async (dto) => {
  const response = await changeFoodFromOneMenuToAnother(dto);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
