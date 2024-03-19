import { emptyCallback } from "@/consts";
import { createContext } from "react";

export interface NewRestaurantInterface {
  newRestaurant: CreateRestaurantDto;
  disptatchStateChange: (updateDiff: Partial<CreateRestaurantDto>) => void;
  image: any;
  dispatchImage: (image: any) => void;
}

export interface CreateRestaurantDto {
  name: string;
  description: string;
  streetName: string;
  streetNumber: string;
  city: string;
  country: string;
  workTimeStart: string;
  workTimeEnd: string;
}

export function createNewRestaurantInterfaceWithDefaultValues(): NewRestaurantInterface {
  return {
    newRestaurant: {
      city: "",
      country: "",
      description: "",
      name: "",
      streetName: "",
      streetNumber: "",
      workTimeEnd: "",
      workTimeStart: "",
    },
    disptatchStateChange: emptyCallback,
    image: null,
    dispatchImage: emptyCallback,
  };
}

export const NewRestaurantContext = createContext(
  createNewRestaurantInterfaceWithDefaultValues()
);
