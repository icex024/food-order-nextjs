import {
  useFetchOrdersForDelivererHistoryIfNeeded,
  useOrdersDelivererHistory,
} from "@/backend-layer/order";
import { NavbarDeliverer, OrdersContainer } from "@/components/deliverer-panel";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const DelivererHistory: NextPage = () => {
  useFetchOrdersForDelivererHistoryIfNeeded();
  const orders = useOrdersDelivererHistory();
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

export default DelivererHistory;
