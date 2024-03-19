import { ReactNode, useReducer } from "react";
import {
  CreateRestaurantDto,
  NewRestaurantContext,
  NewRestaurantInterface,
  createNewRestaurantInterfaceWithDefaultValues,
} from "./newRestaurantContext";

export const NewRestaurantProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [newRestaurantInitial, dispatchNewRestaurant] = useReducer(
    dispatchNewRestaurantState,
    createNewRestaurantInterfaceWithDefaultValues().newRestaurant
  );

  const [imageInitial, dispatchImage] = useReducer(
    dispatchImageState,
    createNewRestaurantInterfaceWithDefaultValues().image
  );

  const value: NewRestaurantInterface = {
    newRestaurant: newRestaurantInitial,
    disptatchStateChange: (updateDiff) =>
      dispatchNewRestaurant({ ...newRestaurantInitial, ...updateDiff }),
    image: imageInitial,
    dispatchImage: (image) => dispatchImage(image),
  };

  return (
    <NewRestaurantContext.Provider value={value}>
      {children}
    </NewRestaurantContext.Provider>
  );
};

const dispatchNewRestaurantState = (
  state: CreateRestaurantDto,
  action: CreateRestaurantDto
) => {
  state = { ...action };
  return state;
};

const dispatchImageState = (state: any, action: any) => {
  state = action;
  return state;
};
