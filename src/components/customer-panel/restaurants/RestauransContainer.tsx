import { useRestaurants } from "@/backend-layer/restaurants-ui";
import { RestaurantCard } from "./RestaurantCard";
import { RestaurantDto } from "@/backend-layer/_internal/redux/restaurant-ui/restaurantsUiSlice";
import { FC } from "react";
import classNames from "classnames";

interface Props {
  className?: string;
}

export const RestaurantsContainer: FC<Props> = ({ className = "" }) => {
  const restaurants = useRestaurants();
  return (
    <div
      className={classNames(
        "grid grid-cols-5 place-items-center gap-4",
        className
      )}
    >
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
    </div>
  );
};
