import { CreateRestaurantDto } from "@/components/admin-panel/new-restaurant/newRestaurantContext";
import { useAppDispatch } from "../../store";
import { createRestaurantAsync } from "./createRestaurantAsync";

export const useCreateRestaurant = () => {
  const dispatch = useAppDispatch();
  return (dto: CreateRestaurantDto, image: any) => {
    dispatch(createRestaurantAsync({ dto, image }));
  };
};
