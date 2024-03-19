import { AxiosResponse } from "axios";
import { RestaurantDto } from "./restaurantsUiSlice";
import { getAxios } from "../../axios-wrapper";
import { CreateRestaurantDto } from "@/components/admin-panel/new-restaurant/newRestaurantContext";
import { CreateUserByAdminDto } from "@/components/admin-panel/new-user-by-admin/newUserByAdminContext";

export const fetchAllRestaurants = (): Promise<
  AxiosResponse<RestaurantDto[], unknown>
> => {
  return getAxios().get("/restaurant/get-restaurants", { data: {} });
};

export const createRestaurant = (dto: CreateRestaurantDto, image: any) => {
  const blob = new Blob([JSON.stringify(dto)], {
    type: "application/json",
  });
  console.log(image);
  const data = new FormData();
  data.append("dto", blob);
  data.append("image", image);
  return getAxios(true).post("/restaurant/create-restaurant", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const createUserByAdmin = (dto: CreateUserByAdminDto) => {
  return getAxios().post("/user/create-manager-or-deliverer", dto);
};

export interface EditRestaurantStatusDto {
  id: string;
  visibility: boolean;
}

export const changeRestaurantStatus = (dto: EditRestaurantStatusDto) => {
  return getAxios().patch("/restaurant/change-restaurant-status", dto);
};

export interface AddManagerOrDelivererToRestaurantDto {
  userId: string;
  restaurantId: string;
}

export const addManagerOrDriverToRestaurant = (
  dto: AddManagerOrDelivererToRestaurantDto
) => {
  return getAxios().patch("/user/add-manager-or-deliverer-to-restaurant", dto);
};

export const getManagersAndDeliverers = () => {
  return getAxios().get("/user/get-deliverers-and-managers", { data: {} });
};
