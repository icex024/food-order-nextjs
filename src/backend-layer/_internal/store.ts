import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import sessionSlice from "./redux/session/sessionSlice";
import foodUISlice from "./redux/food-ui/foodUISlice";
import restaurantUiSlice from "./redux/restaurant-ui/restaurantsUiSlice";
import orderSlice from "./redux/order/orderSlice";
import loyaltySlice from "./redux/loyalty/loyaltySlice";

function makeStore() {
  return configureStore({
    reducer: {
      session: sessionSlice,
      foodUI: foodUISlice,
      restaurantsUi: restaurantUiSlice,
      order: orderSlice,
      loyalty: loyaltySlice,
    },
  });
}

let store: ReturnType<typeof makeStore>;

const initializeStore = () => {
  const _store = store ?? makeStore();
  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}

export function clearStore() {
  store = makeStore();
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
