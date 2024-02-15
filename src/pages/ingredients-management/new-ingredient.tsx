import { NavbarManager } from "@/components/manager-panel/navbar";
import { MakeIngredientComponent } from "@/components/manager-panel/page-components";
import { MakeIngredientProvider } from "@/components/manager-panel/page-components/make-ingredient-store";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";

const NewIngredient: NextPage = () => {
  return (
    <>
      <NavbarManager></NavbarManager>
      <div className="bg-primary">
        <PanelContainer className="flex">
          <MakeIngredientProvider>
            <MakeIngredientComponent />
          </MakeIngredientProvider>
        </PanelContainer>
      </div>
    </>
  );
};

export default NewIngredient;
