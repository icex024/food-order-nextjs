import { AppState } from "../../store";

export const fetchStatus = (state: AppState) => {
  return state.restaurantsUi.fetchStatus;
};

export const allRestaurants = (state: AppState) => {
  return state.restaurantsUi.restaurants;
};
