import { useSetCustomerIdForOrder } from "@/backend-layer/order";
import { NavbarCustomer } from "@/components/customer-panel/navbar";
import { OrderDetails } from "@/components/customer-panel/order";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const ReviewOrder: NextPage = () => {
  useSetCustomerIdForOrder();

  return (
    <>
      <NavbarCustomer></NavbarCustomer>
      <div className="bg-primary">
        <PanelContainer>
          <OrderDetails />
        </PanelContainer>
      </div>
    </>
  );
};

export default ReviewOrder;
