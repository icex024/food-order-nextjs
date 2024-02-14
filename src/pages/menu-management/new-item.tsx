import { NavbarManager } from "@/components/manager-panel/navbar";
import { MakeNewItemComponent } from "@/components/manager-panel/page-components";
import { MakeNewItemProvider } from "@/components/manager-panel/page-components/make-new-item-store";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const NewItem: NextPage = () => {
  return (
    <>
      <NavbarManager></NavbarManager>
      <div className="bg-primary flex">
        <PanelContainer>
          <MakeNewItemProvider>
            <MakeNewItemComponent />
          </MakeNewItemProvider>
        </PanelContainer>
      </div>
    </>
  );
};

export default NewItem;
