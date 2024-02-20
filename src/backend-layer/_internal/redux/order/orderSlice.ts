import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderInterface } from "./OrderInterface";
import { AppState } from "../../store";
import { applyFetchOrdersForCustomerInitialAsync } from "./fetchOrdersForCustomerInitialAsync";
import { applyMakeOrderAsync } from "./makeOrderAsnyc";
import { applyFetchOrdersForCustomerHistoryAsync } from "./fetchOrdersForCustomerHistortAsync";
import { applyFetchOrdersDelivererInDeliveryAsync } from "./fetchOrdersDelivererInDeliveryAsync";
import { applyFetchOrdersDelivererHistoryAsync } from "./fetchOrdersDelivererHistoryAsync";
import { applyFetchOrdersDelivererTakenAsync } from "./fetchOrdersDelivererTakenAsync";
import { applyFetchOrdersDelivererAsync } from "./fetchOrdersDelivererAsync";
import { applyFetchAvailableDelivererSlotsAsync } from "./fetchAvailableDelivererSlotsAsync";

const orderInitialState: OrderInterface = {
  craeteOrder: {
    foodIds: [],
    note: "",
    paymentType: "CASH",
    price: 0,
    userId: "",
  },
  createOrderResponse: "",
  viewCustomerOrdersInitialFetchStatus: "NOTFETCHED",
  viewOrders: [],
  viewCustomerOrdersHistoryFetchStatus: "NOTFETCHED",
  viewOrdersHistory: [],
  viewOrdersDeliverer: [],
  viewOrdersDelivererFetchStatus: "NOTFETCHED",
  viewOrdersDelivererHistory: [],
  viewOrdersDelivererHistoryFetchStatus: "NOTFETCHED",
  viewOrdersDelivererInDelivery: [],
  viewOrdersDelivererInDeliveryFetchStatus: "NOTFETCHED",
  viewOrdersDelivererTaken: [],
  viewOrdersDelivererTakenFetchStatus: "NOTFETCHED",
  availableSlots: 0,
  availableSlotsFetchStatus: "NOTFETCHED",
};

export const orderSlice = createSlice({
  initialState: orderInitialState,
  name: "order",
  reducers: {
    addUnitToCart: (state, action: PayloadAction<string>) => {
      state.craeteOrder.foodIds.push(action.payload);
    },
    setCustomerId: (state, action: PayloadAction<string>) => {
      state.craeteOrder.userId = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.craeteOrder.note = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.craeteOrder.price = action.payload;
    },
    changeOrderFromInitialToHistory: (state, action: PayloadAction<string>) => {
      const order = state.viewOrders.find(
        (order) => order.id === action.payload
      );
      if (typeof order !== "undefined") {
        const index = state.viewOrders.indexOf(order);
        state.viewOrders.splice(index, 1);
        order.status = "CANCELLED";
        state.viewOrdersHistory.push(order);
      }
    },
    takeOrderSlice: (state, action: PayloadAction<string>) => {
      const order = state.viewOrdersDeliverer.find(
        (order) => order.id === action.payload
      );
      if (typeof order !== "undefined") {
        const index = state.viewOrdersDeliverer.indexOf(order);
        state.viewOrdersDeliverer.splice(index, 1);
        order.status = "TAKEN_BY_DELIVERER";
        state.viewOrdersDelivererTaken.push(order);
      }
    },
    decreaseSlots: (state) => {
      state.availableSlots = state.availableSlots - 1;
    },
    increaseSlots: (state) => {
      state.availableSlots = state.availableSlots + 1;
    },
    changeOrderFromTakenToReady: (state, action: PayloadAction<string>) => {
      const order = state.viewOrdersDelivererTaken.find(
        (order) => order.id === action.payload
      );
      if (typeof order !== "undefined") {
        const index = state.viewOrdersDelivererTaken.indexOf(order);
        console.log("index:" + index);
        state.viewOrdersDelivererTaken.splice(index, 1);
        order.status = "READY";
        state.viewOrdersDeliverer.push(order);
      }
    },
    changeOrderFromTakenToInDelivery: (state) => {
      state.viewOrdersDelivererInDelivery = state.viewOrdersDelivererTaken.map(
        (order) => {
          order.status = "IN_DELIVERY";
          return order;
        }
      );
      state.viewOrdersDelivererTaken = [];
    },
    changeOrderFromInDeliveryToDelivered: (
      state,
      action: PayloadAction<string>
    ) => {
      const order = state.viewOrdersDelivererInDelivery.find(
        (order) => order.id === action.payload
      );
      if (typeof order !== "undefined") {
        const index = state.viewOrdersDelivererInDelivery.indexOf(order);
        console.log("index:" + index);
        state.viewOrdersDelivererInDelivery.splice(index, 1);
        order.status = "DELIVERED";
        state.viewOrdersDelivererHistory.push(order);
      }
    },
  },
  extraReducers: (builder) => {
    applyFetchOrdersForCustomerInitialAsync(builder);
    applyMakeOrderAsync(builder);
    applyFetchOrdersForCustomerHistoryAsync(builder);
    applyFetchOrdersDelivererInDeliveryAsync(builder);
    applyFetchOrdersDelivererHistoryAsync(builder);
    applyFetchOrdersDelivererTakenAsync(builder);
    applyFetchOrdersDelivererAsync(builder);
    applyFetchAvailableDelivererSlotsAsync(builder);
  },
});

export const {
  addUnitToCart,
  setCustomerId,
  setNote,
  setPrice,
  changeOrderFromInitialToHistory,
  takeOrderSlice,
  decreaseSlots,
  changeOrderFromTakenToReady,
  increaseSlots,
  changeOrderFromTakenToInDelivery,
  changeOrderFromInDeliveryToDelivered,
} = orderSlice.actions;

export default orderSlice.reducer;
