import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderInterface } from "./OrderInterface";
import { AppState } from "../../store";
import { applyFetchOrdersForCustomerInitialAsync } from "./fetchOrdersForCustomerInitialAsync";
import { applyMakeOrderAsync } from "./makeOrderAsnyc";
import { applyFetchOrdersForCustomerHistoryAsync } from "./fetchOrdersForCustomerHistortAsync";

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
  },
  extraReducers: (builder) => {
    applyFetchOrdersForCustomerInitialAsync(builder);
    applyMakeOrderAsync(builder);
    applyFetchOrdersForCustomerHistoryAsync(builder);
  },
});

export const {
  addUnitToCart,
  setCustomerId,
  setNote,
  setPrice,
  changeOrderFromInitialToHistory,
} = orderSlice.actions;

export default orderSlice.reducer;
