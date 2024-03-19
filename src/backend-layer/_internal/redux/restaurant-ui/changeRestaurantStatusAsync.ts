import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  EditRestaurantStatusDto,
  changeRestaurantStatus,
} from "./reastaurantsUiService";
import { AppState } from "../../store";

export const changeRestaurantStatusAsync = createAsyncThunk<
  undefined,
  EditRestaurantStatusDto,
  { state: AppState }
>("restaurantUI/changeRestaurantStatusAsync", async (dto) => {
  const response = await changeRestaurantStatus(dto);

  if (response.status !== 200) {
    throw Error("Smthg went wrong");
  }

  return response.data;
});
