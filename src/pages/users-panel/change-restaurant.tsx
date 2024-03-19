import {
  useAddManagerOrDelivererToRestaurant,
  useFetchRestaurantsIfNeeded,
  useRestaurants,
} from "@/backend-layer/restaurants-ui";
import { NavbarAdmin } from "@/components/admin-panel";
import { RegularButton } from "@/components/buttons";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const ChangeRestaurant: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  useFetchRestaurantsIfNeeded();
  const restaurants = useRestaurants();
  const [restaurantId, setRestaurantId] = useState("");
  const change = useAddManagerOrDelivererToRestaurant();
  return (
    <>
      <NavbarAdmin />
      <div className="bg-primary">
        <PanelContainer className="relative flex place-content-center">
          <div className="flex flex-col gap-2 max-w-[512px] w-full mx-auto bg-white p-4 place-self-center rounded-lg shadow-lg">
            <div>
              <div className="">
                <div className="py-3">
                  <select
                    onChange={(e) => setRestaurantId(e.target.value)}
                    className="max-w-[512px] border-[2px] rounded-2xl border-primary-second bg-white p-1 w-full h-full px-4 focus:outline-none "
                  >
                    <option selected disabled>
                      Choose restaurant...
                    </option>
                    {restaurants.map((restaurant) => (
                      <option key={restaurant.id} value={restaurant.id}>
                        {restaurant.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2 mt-2">
                  <RegularButton
                    onClick={() => {
                      router.push("/users-panel");
                    }}
                    color="white"
                  >
                    Go back
                  </RegularButton>
                  <RegularButton
                    onClick={() => {
                      const rest = restaurants.find(
                        (restaurant) => restaurant.id === restaurantId
                      );
                      if (typeof id === "string") {
                        change(
                          restaurantId,
                          id?.toString(),
                          typeof rest !== "undefined" ? rest.name : ""
                        );
                      }
                      router.push("/users-panel");
                    }}
                    color="primary-fourth"
                  >
                    Change
                  </RegularButton>
                </div>
              </div>
            </div>
          </div>
        </PanelContainer>
      </div>
    </>
  );
};

export default ChangeRestaurant;
