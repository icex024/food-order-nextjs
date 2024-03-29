import { useFetchFoodsByUserIdIfNeeded } from "@/backend-layer/food-ui";
import {
  useFetchAvailableDelivererSlotsIfNeeded,
  useFetchOrdersForDelivererIfNeeded,
  useOrdersDeliverer,
} from "@/backend-layer/order";
import { NavbarDeliverer, OrdersContainer } from "@/components/deliverer-panel";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const DelivererPanel: NextPage = () => {
  useFetchFoodsByUserIdIfNeeded();
  useFetchOrdersForDelivererIfNeeded();
  const orders = useOrdersDeliverer();
  useFetchAvailableDelivererSlotsIfNeeded();
  return (
    <>
      <NavbarDeliverer />
      <div className="bg-primary">
        <PanelContainer>
          <OrdersContainer orders={orders} />
        </PanelContainer>
      </div>
    </>
  );
};

export default DelivererPanel;
