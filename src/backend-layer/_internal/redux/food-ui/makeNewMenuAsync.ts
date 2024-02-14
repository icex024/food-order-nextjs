import { MakeMenuDto } from "@/components/manager-panel/page-components/make-menu-store/makeMenuContext";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { makeNewMenu } from "./foodUIService";

export const makeNewMenuAsync = createAsyncThunk<
  undefined,
  MakeMenuDto,
  { state: AppState }
>("foodUI/makeNewMenuAsync", async (dto) => {
  const response = await makeNewMenu(dto);

  if (response.status !== 200) {
    throw Error("Something went wrong, status:" + response.status);
  }

  return response.data;
});
