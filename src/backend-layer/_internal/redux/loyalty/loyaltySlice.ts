import { createSlice } from "@reduxjs/toolkit";
import { LoyaltyInterface } from "./LoyaltyInterface";
import { applyFetchLoyaltyDefinitionAsync } from "./fetchLoyaltyDefinitionsAsync";
import { applyFetchDrinksAsync } from "./fetchDrinksAsync";

const initialState: LoyaltyInterface = {
  loyaltyDefinitions: [],
  loyaltyDefinitionsFetchStatus: "NOTFETCHED",
  drinks: [],
  fetchDrinksStatus: "NOTFETCHED",
};

const loyaltySlice = createSlice({
  initialState: initialState,
  name: "loyalty",
  reducers: {},
  extraReducers: (builder) => {
    applyFetchLoyaltyDefinitionAsync(builder);
    applyFetchDrinksAsync(builder);
  },
});

export const {} = loyaltySlice.actions;

export default loyaltySlice.reducer;
