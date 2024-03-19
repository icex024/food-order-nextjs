import { CreateRestaurantDto } from "@/components/admin-panel/new-restaurant/newRestaurantContext";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { createRestaurant } from "./reastaurantsUiService";

export const createRestaurantAsync = createAsyncThunk<
  undefined,
  { dto: CreateRestaurantDto; image: any },
  { state: AppState }
>("restaurantUI/createRestaurantAsync", async ({ dto, image }) => {
  const response = await createRestaurant(dto, image);

  if (response.status !== 200) {
    throw Error("Smthg went wrong");
  }

  return response.data;
});
