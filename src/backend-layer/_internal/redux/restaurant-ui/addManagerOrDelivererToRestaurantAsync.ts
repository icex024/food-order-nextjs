import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddManagerOrDelivererToRestaurantDto,
  addManagerOrDriverToRestaurant,
} from "./reastaurantsUiService";
import { AppState } from "../../store";

export const addManagerOrDelivererToRestaurantAsync = createAsyncThunk<
  undefined,
  AddManagerOrDelivererToRestaurantDto,
  { state: AppState }
>("restaurantUI/addManagerOrDelivererToRestaurantAsync", async (dto) => {
  const response = await addManagerOrDriverToRestaurant(dto);

  if (response.status !== 200) {
    throw Error("Smthg went wrong");
  }

  return response.data;
});
