import { AppState } from "../../store";

export const selectedFoods = (state: AppState) =>
  state.order.craeteOrder.foodIds;

export const currentOrder = (state: AppState) => state.order.craeteOrder;

export const customerOrdersInitialFetchStatus = (state: AppState) =>
  state.order.viewCustomerOrdersInitialFetchStatus;

export const customerOrders = (state: AppState) => state.order.viewOrders;

export const customerOrdersHistoryFetchStatus = (state: AppState) =>
  state.order.viewCustomerOrdersHistoryFetchStatus;

export const customerOrdersHistory = (state: AppState) =>
  state.order.viewOrdersHistory;

export const selectOrderFromInitial = (state: AppState, orderId: string) =>
  state.order.viewOrders.find((order) => order.id === orderId);
