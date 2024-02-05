import { RestaurantDto } from "@/backend-layer/_internal/redux/restaurant-ui/restaurantsUiSlice";
import { useSetRestaurantId } from "@/backend-layer/food-ui";
import { RegularButton } from "@/components/buttons";
import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
  restaurant: RestaurantDto;
}

export const RestaurantCard: FC<Props> = ({ restaurant }) => {
  const src = `data:image/png;base64,${restaurant?.image}`;
  const router = useRouter();
  const setRestaurantId = useSetRestaurantId();
  return (
    <div className="max-w-[256px] max-w rounded-xl overflow-hidden shadow-xl bg-primary">
      {<Image src={src} alt="" width={256} height={256} />}
      <div className="p-2">
        <div className="mb-1">{restaurant.name}</div>
        <div className="mb-1">{restaurant.description}</div>
        <div className="mb-2">
          {restaurant.workTimeStart} - {restaurant.workTimeEnd}
        </div>
        <div>
          <RegularButton
            onClick={() => {
              router.push("/restaurant-preview");
              setRestaurantId(restaurant.id);
            }}
            color="primary-fourth"
          >
            View
          </RegularButton>
        </div>
      </div>
    </div>
  );
};
