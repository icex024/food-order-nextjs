import { MakeItemDto } from "@/components/manager-panel/page-components/make-new-item-store/makeNewItemContext";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { createFood } from "./foodUIService";

export const createFoodAsync = createAsyncThunk<
  undefined,
  { dto: MakeItemDto; image: any },
  { state: AppState }
>("foodUI/createFoodAsync", async ({ dto, image }) => {
  const response = await createFood(dto, image);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});
