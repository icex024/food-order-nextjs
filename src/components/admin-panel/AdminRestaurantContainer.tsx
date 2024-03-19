import { RestaurantDto } from "@/backend-layer/_internal/redux/restaurant-ui/restaurantsUiSlice";
import {
  useChangeRestaurantStatus,
  useRestaurants,
} from "@/backend-layer/restaurants-ui";
import classNames from "classnames";
import { FC } from "react";
import { RegularButton } from "../buttons";
import { useRouter } from "next/router";
import { useSetRestaurantId } from "@/backend-layer/food-ui";
import Image from "next/image";

interface Props {
  className?: string;
}

export const AdminRestaurantContainer: FC<Props> = ({ className = "" }) => {
  const restaurants = useRestaurants();
  return (
    <div
      className={classNames(
        "pt-4 flex flex-wrap gap-8 justify-center",
        className
      )}
    >
      {restaurants.map((restaurant, i) => (
        <RestaurantCard restaurant={restaurant} key={i} />
      ))}
    </div>
  );
};

export const RestaurantCard: FC<{ restaurant: RestaurantDto }> = ({
  restaurant,
}) => {
  const src = `data:image/png;base64,${restaurant?.image}`;
  const router = useRouter();
  const changeStatus = useChangeRestaurantStatus();
  console.log(restaurant);
  return (
    <div className="flex flex-col max-w-[256px] max-w rounded-xl overflow-hidden shadow-xl bg-primary">
      <div>{<Image src={src} alt="" width={256} height={256} />}</div>
      <div className="flex-grow flex flex-col justify-between p-2">
        <div className="">
          <div className="mb-1">{restaurant.name}</div>
          <div className="mb-1">{restaurant.description}</div>
          <div className="mb-2">
            {restaurant.workTimeStart} - {restaurant.workTimeEnd}
          </div>
        </div>
        <div>
          <RegularButton
            onClick={() => {
              changeStatus(restaurant.id, restaurant.visibility);
            }}
            color="primary-fourth"
          >
            {restaurant.visibility ? "Disable" : "Enable"}
          </RegularButton>
        </div>
      </div>
    </div>
  );
};
