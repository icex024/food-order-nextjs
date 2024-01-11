import { AxiosPromise, AxiosResponse } from "axios";
import {
  AllergenDto,
  FoodDto,
  IngredientDto,
  RestaurantDto,
} from "./FoodInterface";
import { getAxios } from "../axios-wrapper";

export const getAllergens = (): Promise<
  AxiosResponse<AllergenDto[], unknown>
> => {
  return getAxios().get("/allergen/get-allergens", { data: {} });
};

export const getFoodsForMenu = (
  menuId: string
): Promise<AxiosResponse<FoodDto[], unknown>> => {
  return getAxios().get("/food/get-foods-by-menu-id?id=" + menuId, {
    data: {},
  });
};

export const getRestaurantById = (
  restaurantId: string
): Promise<AxiosResponse<RestaurantDto, unknown>> => {
  return getAxios().get("/restaurant/get-restaurant?id=" + restaurantId, {
    data: {},
  });
};

export const getAllIngredients = (): Promise<
  AxiosResponse<IngredientDto[], unknown>
> => {
  return getAxios().get("/ingredient/get-all-ingredients", { data: {} });
};
