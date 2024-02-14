import { RegularTextInput } from "@/components/inputs";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { MakeMenuComponent } from "@/components/manager-panel/page-components";
import { MakeMenuProvider } from "@/components/manager-panel/page-components/make-menu-store";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const NewMenu: NextPage = () => {
  return (
    <>
      <NavbarManager></NavbarManager>
      <div className="bg-primary">
        <PanelContainer className="flex">
          <MakeMenuProvider>
            <MakeMenuComponent />
          </MakeMenuProvider>
        </PanelContainer>
      </div>
    </>
  );
};

export default NewMenu;
