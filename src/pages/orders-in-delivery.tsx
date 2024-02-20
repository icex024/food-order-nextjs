import { useFetchFoodsByUserIdIfNeeded } from "@/backend-layer/food-ui";
import {
  useFetchOrdersForDelivererInDeliveryIfNeeded,
  useOrdersDelivererInDelivery,
} from "@/backend-layer/order";
import { NavbarDeliverer, OrdersContainer } from "@/components/deliverer-panel";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const OrdersInDelivery: NextPage = () => {
  useFetchFoodsByUserIdIfNeeded();
  useFetchOrdersForDelivererInDeliveryIfNeeded();
  const orders = useOrdersDelivererInDelivery();
  return (
    <>
      <NavbarDeliverer></NavbarDeliverer>
      <div className="bg-primary">
        <PanelContainer>
          <OrdersContainer orders={orders} />
        </PanelContainer>
      </div>
    </>
  );
};

export default OrdersInDelivery;
