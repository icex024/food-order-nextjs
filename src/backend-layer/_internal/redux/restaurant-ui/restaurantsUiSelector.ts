import { AppState } from "../../store";

export const fetchStatus = (state: AppState) => {
  return state.restaurantsUi.fetchStatus;
};

export const allRestaurants = (state: AppState) => {
  return state.restaurantsUi.restaurants;
};

export const usersFetchStatus = (state: AppState) =>
  state.restaurantsUi.usersFetchStatus;

export const fetchedUsers = (state: AppState) => state.restaurantsUi.users;
