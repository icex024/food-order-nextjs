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

export const delivererOrdersFetchStatus = (state: AppState) =>
  state.order.viewOrdersDelivererFetchStatus;
export const delivererOrdersTakenFetchStatus = (state: AppState) =>
  state.order.viewOrdersDelivererTakenFetchStatus;
export const delivererOrdersInDeliveryFetchStatus = (state: AppState) =>
  state.order.viewOrdersDelivererInDeliveryFetchStatus;
export const delivererOrdersHistoryFetchStatus = (state: AppState) =>
  state.order.viewOrdersDelivererHistoryFetchStatus;
export const availableSlotsFetchStatus = (state: AppState) =>
  state.order.availableSlotsFetchStatus;

export const takenOrdersIds = (state: AppState) =>
  state.order.viewOrdersDelivererTaken.map((order) => order.id);

export const orderDeliverer = (state: AppState) =>
  state.order.viewOrdersDeliverer;
export const orderDelivererHistory = (state: AppState) =>
  state.order.viewOrdersDelivererHistory;
export const orderDelivererInDelivery = (state: AppState) =>
  state.order.viewOrdersDelivererInDelivery;
export const orderDelivererTaken = (state: AppState) =>
  state.order.viewOrdersDelivererTaken;

export const selectedAvailableSlots = (state: AppState) =>
  state.order.availableSlots;
