import { useContext } from "react";
import { NewRestaurantContext } from "./newRestaurantContext";
import { useCreateRestaurant } from "@/backend-layer/restaurants-ui";

export const useSetNameNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.name,
    (name: string) => {
      context.disptatchStateChange({ name });
    },
  ];
};

export const useSetDescriptionNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.description,
    (description: string) => {
      context.disptatchStateChange({ description });
    },
  ];
};
export const useSetStreetNameNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.streetName,
    (streetName: string) => {
      context.disptatchStateChange({ streetName });
    },
  ];
};
export const useSetStreetNumberNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.streetNumber,
    (streetNumber: string) => {
      context.disptatchStateChange({ streetNumber });
    },
  ];
};
export const useSetCityNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.city,
    (city: string) => {
      context.disptatchStateChange({ city });
    },
  ];
};
export const useSetCountryNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.country,
    (country: string) => {
      context.disptatchStateChange({ country });
    },
  ];
};
export const useSetWorkTimeStartNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.workTimeStart,
    (workTimeStart: string) => {
      context.disptatchStateChange({ workTimeStart });
    },
  ];
};
export const useSetWorkTimeEndNewRestaurant = (): [
  string,
  (value: string) => void
] => {
  const context = useContext(NewRestaurantContext);
  return [
    context.newRestaurant.workTimeEnd,
    (workTimeEnd: string) => {
      context.disptatchStateChange({ workTimeEnd });
    },
  ];
};

export const useSetImageNewRestaurant = () => {
  const context = useContext(NewRestaurantContext);
  return (image: any) => {
    console.log(image);
    context.dispatchImage(image);
  };
};

export const useCrateRestaurantContext = () => {
  const context = useContext(NewRestaurantContext);
  const createRestaurant = useCreateRestaurant();
  return () => {
    console.log("context");
    console.log(context.image);
    createRestaurant(context.newRestaurant, context.image);
  };
};
