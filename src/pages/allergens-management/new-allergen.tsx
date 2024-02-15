import { useAddAllergen } from "@/backend-layer/food-ui";
import { RegularButton } from "@/components/buttons";
import { RegularTextInput } from "@/components/inputs";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";

const NewAllergen: NextPage = () => {
  const [name, setName] = useState("");
  const makeAllergen = useAddAllergen();
  const router = useRouter();
  return (
    <>
      <NavbarManager></NavbarManager>
      <div className="bg-primary">
        <PanelContainer className="flex">
          <div className="flex flex-col gap-2 bg-white p-4 rounded-lg shadow-lg max-w-[512px] w-full place-self-center mx-auto">
            <div>Name:</div>
            <RegularTextInput setState={(name) => setName(name)} />
            <div className="flex gap-2">
              <RegularButton
                onClick={() => router.push("/allergens-management")}
                color="white"
              >
                Back
              </RegularButton>
              <RegularButton
                onClick={() => {
                  makeAllergen(name);
                  router.push("/allergens-management");
                }}
                color="primary-fourth"
              >
                Make allergen
              </RegularButton>
            </div>
          </div>
        </PanelContainer>
      </div>
    </>
  );
};

export default NewAllergen;
