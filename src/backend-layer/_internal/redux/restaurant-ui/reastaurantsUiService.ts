import { AxiosResponse } from "axios";
import { RestaurantDto } from "./restaurantsUiSlice";
import { getAxios } from "../../axios-wrapper";

export const fetchAllRestaurants = (): Promise<
  AxiosResponse<RestaurantDto[], unknown>
> => {
  return getAxios().get("/restaurant/get-restaurants", { data: {} });
};
