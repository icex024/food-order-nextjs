import { useFetchRestaurantsIfNeeded } from "@/backend-layer/restaurants-ui";
import { NavbarCustomer } from "@/components/customer-panel/navbar";
import { RestaurantsContainer } from "@/components/customer-panel/restaurants";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const CustomerPanel: NextPage = () => {
  useFetchRestaurantsIfNeeded();
  return (
    <>
      <NavbarCustomer />
      <div className="bg-primary">
        <PanelContainer>
          <RestaurantsContainer className="pt-4" />
        </PanelContainer>
      </div>
    </>
  );
};

export default CustomerPanel;
