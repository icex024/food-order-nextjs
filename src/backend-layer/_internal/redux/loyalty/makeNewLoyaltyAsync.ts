import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { MakeLoyaltyDto } from "@/components/manager-panel/page-components/make-loyalty-store/makeLoyaltyContext";
import { makeLoylaty } from "./loyaltyService";

export const makeNewLoyaltyAsync = createAsyncThunk<
  void,
  MakeLoyaltyDto,
  { state: AppState }
>("loylaty/makeNewLoyaltyAsync", async (dto) => {
  const response = await makeLoylaty(dto);
  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }
  return response.data;
});
