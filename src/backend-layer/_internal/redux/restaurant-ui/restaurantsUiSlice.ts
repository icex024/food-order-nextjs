import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { applyFetchAllRestaurantsAsync } from "./fetchAllRestaurantsAsync";
import { EditRestaurantStatusDto } from "./reastaurantsUiService";
import { applyFetchManagersAndDeliverersAsync } from "./fetchManagersAndDeliverersAsync";
import { CreateUserByAdminDto } from "@/components/admin-panel/new-user-by-admin/newUserByAdminContext";
import { applyCreateUserByAdminAsync } from "./createUserByAdminAsync";

export interface UserAndRestaurantDto {
  userId: string;
  restaurantId: string;
  restaurantName: string;
}

export interface RestaurantsInterface {
  restaurants: RestaurantDto[];
  fetchStatus: RestaurantsFetchStatus;
  newUserMessage: string;
  users: ManagerOrDeliverePreview[];
  usersFetchStatus: "FETCHED" | "NOTFETCHED" | "PENDING" | "REJECTED";
}

export interface RestaurantDto {
  id: string;
  name: string;
  description: string;
  workTimeStart: string;
  workTimeEnd: string;
  image: any;
  visibility: boolean;
}

export interface ManagerOrDeliverePreview {
  id: string;
  firstName: string;
  lastName: string;
  restaurantId: string;
  restaurantName: string;
  role: string;
}

export enum RestaurantsFetchStatus {
  Fetched = "Fetched",
  NotFetched = "NotFetched",
}

const initialState: RestaurantsInterface = {
  restaurants: [],
  fetchStatus: RestaurantsFetchStatus.NotFetched,
  newUserMessage: "",
  users: [],
  usersFetchStatus: "NOTFETCHED",
};

const restaurantsUiSlice = createSlice({
  initialState: initialState,
  name: "restaurantsUi",
  reducers: {
    changeRestaurantStatusSlice: (
      state,
      action: PayloadAction<EditRestaurantStatusDto>
    ) => {
      state.restaurants = state.restaurants.map((restaurant) => {
        if (restaurant.id === action.payload.id) {
          restaurant.visibility = action.payload.visibility;
        }
        return restaurant;
      });
    },
    changeRestaurantForUser: (
      state,
      action: PayloadAction<UserAndRestaurantDto>
    ) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.userId) {
          user.restaurantId = action.payload.restaurantId;
          user.restaurantName = action.payload.restaurantName;
        }
        return user;
      });
    },
    changeUsersStatusNotFetched: (state) => {
      state.usersFetchStatus = "NOTFETCHED";
    },
  },
  extraReducers: (builder) => {
    applyFetchAllRestaurantsAsync(builder);
    applyFetchManagersAndDeliverersAsync(builder);
    applyCreateUserByAdminAsync(builder);
  },
});

export const {
  changeRestaurantStatusSlice,
  changeRestaurantForUser,
  changeUsersStatusNotFetched,
} = restaurantsUiSlice.actions;

export default restaurantsUiSlice.reducer;
