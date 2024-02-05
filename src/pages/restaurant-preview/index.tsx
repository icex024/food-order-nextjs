import {
  useFetchRestaurantById,
  useSelectedRestaurant,
  useSelectedRestaurantId,
} from "@/backend-layer/food-ui";
import { NavbarCustomer } from "@/components/customer-panel/navbar";
import { PreviewRestaurant } from "@/components/customer-panel/restaurants";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RestaurantReview: NextPage = () => {
  useFetchRestaurantById();
  const restaurantId = useSelectedRestaurantId();
  const router = useRouter();
  useEffect(() => {
    if (restaurantId == "") {
      router.push("/customer-panel");
    }
  }, [restaurantId, router]);

  return (
    <>
      <NavbarCustomer></NavbarCustomer>
      <div className="bg-primary">
        <PanelContainer>
          <PreviewRestaurant />
        </PanelContainer>
      </div>
    </>
  );
};

export default RestaurantReview;
