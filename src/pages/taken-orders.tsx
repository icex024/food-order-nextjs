import { useFetchOrdersForDelivererTaken } from "@/backend-layer/_internal/redux/order/useFetchOrdersForDelivererTaken";
import { useFetchFoodsByUserIdIfNeeded } from "@/backend-layer/food-ui";
import {
  useFetchOrdersForDelivererTakenIfNeeded,
  useOrdersDelivererTaken,
  useStartDelivery,
} from "@/backend-layer/order";
import { RegularButton } from "@/components/buttons";
import { NavbarDeliverer, OrdersContainer } from "@/components/deliverer-panel";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";

const TakenOrders: NextPage = () => {
  useFetchFoodsByUserIdIfNeeded();
  useFetchOrdersForDelivererTakenIfNeeded();
  const orders = useOrdersDelivererTaken();
  const router = useRouter();
  const startDelivery = useStartDelivery();
  return (
    <>
      <NavbarDeliverer></NavbarDeliverer>
      <div className="bg-primary relative">
        <PanelContainer>
          <OrdersContainer orders={orders} />
        </PanelContainer>
        <div className="absolute bottom-[80px] right-5 h-20">
          <RegularButton
            onClick={() => {
              startDelivery();
              router.push("/orders-in-delivery");
            }}
            color="primary-fourth"
            className="p-4"
          >
            Start delivery
          </RegularButton>
        </div>
      </div>
    </>
  );
};

export default TakenOrders;
