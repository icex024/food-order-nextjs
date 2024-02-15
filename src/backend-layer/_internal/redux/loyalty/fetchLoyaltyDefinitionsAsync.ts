import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { LoyaltyDefinitionDto, LoyaltyInterface } from "./LoyaltyInterface";
import { AppState } from "../../store";
import { getLoyalties } from "./loyaltyService";

export const fetchLoyaltyDefinitionsAsync = createAsyncThunk<
  LoyaltyDefinitionDto[],
  string,
  { state: AppState }
>("loyalty/fetchLoyaltyDefinitionsAsync", async (managerId) => {
  const response = await getLoyalties(managerId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchLoyaltyDefinitionAsync = (
  builder: ActionReducerMapBuilder<LoyaltyInterface>
) => {
  builder.addCase(fetchLoyaltyDefinitionsAsync.fulfilled, (state, action) => {
    state.loyaltyDefinitions = action.payload;
    state.loyaltyDefinitionsFetchStatus = "FETCHED";
  });
  builder.addCase(fetchLoyaltyDefinitionsAsync.pending, (state) => {
    state.loyaltyDefinitionsFetchStatus = "PENDING";
  });
  builder.addCase(fetchLoyaltyDefinitionsAsync.rejected, (state) => {
    state.loyaltyDefinitionsFetchStatus = "REJECTED";
  });
};
