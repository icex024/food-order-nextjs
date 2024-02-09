import { NavbarManager } from "@/components/manager-panel/navbar";
import { MakeLoyaltyComponent } from "@/components/manager-panel/page-components";
import { MakeLoyaltyProvider } from "@/components/manager-panel/page-components/make-loyalty-store";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const CreateLoyalty: NextPage = () => {
  return (
    <>
      <NavbarManager></NavbarManager>
      <div className="bg-primary relative">
        <PanelContainer className="flex">
          <MakeLoyaltyProvider>
            <MakeLoyaltyComponent />
          </MakeLoyaltyProvider>
        </PanelContainer>
      </div>
    </>
  );
};

export default CreateLoyalty;
