import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { fetchAvailableDeliverSlots } from "./orderService";
import { OrderInterface } from "./OrderInterface";

export const fetchAvailableDelivererSlotsAsync = createAsyncThunk<
  number,
  string,
  { state: AppState }
>("order/fetchAvailableDelivererSlotsAsync", async (delivererId) => {
  const response = await fetchAvailableDeliverSlots(delivererId);

  if (response.status !== 200) {
    throw Error("Response status not ok:" + response.status);
  }

  return response.data;
});

export const applyFetchAvailableDelivererSlotsAsync = (
  builder: ActionReducerMapBuilder<OrderInterface>
) => {
  builder.addCase(
    fetchAvailableDelivererSlotsAsync.fulfilled,
    (state, action) => {
      state.availableSlots = action.payload;
      state.availableSlotsFetchStatus = "FETCHED";
    }
  );
  builder.addCase(fetchAvailableDelivererSlotsAsync.pending, (state) => {
    state.availableSlotsFetchStatus = "PENDING";
  });
  builder.addCase(fetchAvailableDelivererSlotsAsync.rejected, (state) => {
    state.availableSlotsFetchStatus = "REJECTED";
  });
};
