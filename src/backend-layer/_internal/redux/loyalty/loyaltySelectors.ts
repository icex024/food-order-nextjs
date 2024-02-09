import { AppState } from "../../store";

export const loyaltyDefinitionsFetchStatus = (state: AppState) =>
  state.loyalty.loyaltyDefinitionsFetchStatus;

export const loyalties = (state: AppState) => state.loyalty.loyaltyDefinitions;

export const drinks = (state: AppState) => state.loyalty.drinks;

export const drinksStatus = (state: AppState) =>
  state.loyalty.fetchDrinksStatus;
