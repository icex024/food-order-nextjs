import { CreateUserByAdminDto } from "@/components/admin-panel/new-user-by-admin/newUserByAdminContext";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserByAdmin } from "./reastaurantsUiService";
import { RestaurantsInterface } from "./restaurantsUiSlice";
import { AppState } from "../../store";

export const createUserByAdminAsync = createAsyncThunk<
  string,
  CreateUserByAdminDto,
  { state: AppState }
>("restaurantUI/createUserByAdminAsync", async (dto) => {
  const response = await createUserByAdmin(dto);

  if (response.status !== 200) {
    throw Error("Smthg went wrong");
  }

  return response.data;
});

export const applyCreateUserByAdminAsync = (
  builder: ActionReducerMapBuilder<RestaurantsInterface>
) => {
  builder.addCase(createUserByAdminAsync.fulfilled, (state, action) => {
    state.newUserMessage = action.payload;
    state.usersFetchStatus = "NOTFETCHED";
  });
  builder.addCase(createUserByAdminAsync.rejected, (state, action) => {
    state.newUserMessage = "User with this username already exists!";
  });
};
