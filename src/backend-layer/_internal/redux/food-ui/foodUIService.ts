import { AxiosPromise, AxiosResponse } from "axios";
import {
  AllergenDto,
  FoodDto,
  IngredientDto,
  MenuDto,
  RestaurantDto,
} from "./FoodInterface";
import { getAxios } from "../../axios-wrapper";
import { MakeMenuDto } from "@/components/manager-panel/page-components/make-menu-store/makeMenuContext";
import {
  FoodTypeEnum,
  MakeItemDto,
} from "@/components/manager-panel/page-components/make-new-item-store/makeNewItemContext";
import { MakeIngredientDto } from "@/components/manager-panel/page-components/make-ingredient-store/makeIngredientContext";

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

export const getMenusForRestaurant = (id: string) => {
  return getAxios().get<MenuDto[]>("/menu/get-menus?id=" + id);
};

export const getFoodStatistics = (managerId: string, date: String) => {
  return getAxios().get(
    "/order/get-food-statistics?managerId=" + managerId + "&date=" + date,
    { data: {} }
  );
};

export const getMenusForManager = (managerId: string) => {
  return getAxios().get("/menu/get-menus-for-manager?managerId=" + managerId, {
    data: {},
  });
};

export const makeNewMenu = (dto: MakeMenuDto) => {
  return getAxios().post("/menu/create-menu", dto);
};

export const removeMenu = (menuId: string) => {
  return getAxios().delete("/menu/remove-menu?id=" + menuId, { data: {} });
};

export const createFood = (dto: MakeItemDto, image: any) => {
  const blob = new Blob([JSON.stringify(dto)], {
    type: "application/json",
  });
  const data = new FormData();
  data.append("dto", blob);
  data.append("image", image);
  return getAxios(true).post("/food/create-food", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const removeFood = (foodId: string) => {
  return getAxios().patch("/food/remove-food-from-menu?foodId=" + foodId, {
    data: {},
  });
};

export const updateFoodPrice = (foodId: string, newPrice: number) => {
  return getAxios().patch("/food/update-food-price", {
    id: foodId,
    price: newPrice,
  });
};

export interface AddOrChangeFoodFromMenuDto {
  menuId: string;
  foodId: string;
}

export const changeFoodFromOneMenuToAnother = (
  dto: AddOrChangeFoodFromMenuDto
) => {
  return getAxios().patch("/food/change-menu", dto);
};

export const addIngredient = (dto: MakeIngredientDto) => {
  return getAxios().post("/ingredient/create-ingredient", dto);
};

export const addAllergen = (name: string) => {
  return getAxios().post("/allergen/create-allergen?name=" + name, {
    data: {},
  });
};

export const getFoodsByRestaurantId = (restaurantId: string) => {
  return getAxios().get("/food/get-foods-by-restaurant-id?id=" + restaurantId, {
    data: {},
  });
};

export const getFoodsByUserId = (userId: string) => {
  return getAxios().get("/food/get-foods-by-user-id?id=" + userId, {
    data: {},
  });
};
