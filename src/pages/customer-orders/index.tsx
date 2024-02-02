import { NavbarCustomer } from "@/components/customer-panel/navbar";
import { NextPage } from "next";
import CustomerPanel from "../customer-panel";
import { PanelContainer } from "@/components/sections";
import { CustomerOrderContainer } from "@/components/customer-panel/order";
import { useFetchOrdersForCustomerInitialIfNeeded } from "@/backend-layer/_internal/redux/order/useFetchOrdersForCustomerInitialIfNeeded";
import { useState } from "react";
import { useFetchOrdersForCustomerHistoryIfNeeded } from "@/backend-layer/order";

const CustomerOrders: NextPage = () => {
  useFetchOrdersForCustomerInitialIfNeeded();
  useFetchOrdersForCustomerHistoryIfNeeded();
  const [isInProgress, setInProgress] = useState(true);

  return (
    <>
      <NavbarCustomer></NavbarCustomer>
      <div className="bg-primary">
        <PanelContainer>
          <div className="flex gap-4 font-poppins text-[24px] pt-2 ">
            <div
              className="hover:bg-primary-hover px-1 py-2"
              onClick={() => setInProgress(true)}
            >
              In progress
            </div>
            <div
              className="hover:bg-primary-hover px-1 py-2"
              onClick={() => setInProgress(false)}
            >
              History
            </div>
          </div>
          <CustomerOrderContainer isInProgress={isInProgress} />
        </PanelContainer>
      </div>
    </>
  );
};

export default CustomerOrders;
