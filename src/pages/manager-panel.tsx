import { useFetchFoodStatistics } from "@/backend-layer/food-ui";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { FoodOrdersinMonthComponent } from "@/components/manager-panel/statistics";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const ManagerPanel: NextPage = () => {
  useFetchFoodStatistics();
  return (
    <>
      <NavbarManager />
      <div className="bg-primary">
        <PanelContainer>
          <FoodOrdersinMonthComponent />
        </PanelContainer>
      </div>
    </>
  );
};

export default ManagerPanel;
