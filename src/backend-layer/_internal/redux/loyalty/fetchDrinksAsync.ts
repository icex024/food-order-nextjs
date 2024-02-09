import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { DrinkDto, LoyaltyInterface } from "./LoyaltyInterface";
import { AppState } from "../../store";
import { getDrinks } from "./loyaltyService";

export const fetchDrinksAsync = createAsyncThunk<
  DrinkDto[],
  string,
  { state: AppState }
>("loyalty/fetchDrinksAsync", async (managerId) => {
  const response = await getDrinks(managerId);
  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }
  return response.data;
});

export const applyFetchDrinksAsync = (
  builder: ActionReducerMapBuilder<LoyaltyInterface>
) => {
  builder.addCase(fetchDrinksAsync.fulfilled, (state, action) => {
    state.drinks = action.payload;
    state.fetchDrinksStatus = "FETCHED";
  });
  builder.addCase(fetchDrinksAsync.rejected, (state, action) => {
    state.fetchDrinksStatus = "REJECTED";
  });
  builder.addCase(fetchDrinksAsync.pending, (state, action) => {
    state.fetchDrinksStatus = "PENDING";
  });
};
