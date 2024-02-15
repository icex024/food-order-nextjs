import {
  useAllAllergens,
  useFetchAllergensIfNeeded,
} from "@/backend-layer/food-ui";
import { RegularButton } from "@/components/buttons";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";

const AllergensManagement: NextPage = () => {
  useFetchAllergensIfNeeded();
  const allergens = useAllAllergens();
  const router = useRouter();
  return (
    <>
      <NavbarManager></NavbarManager>
      <div className="bg-primary relative">
        <PanelContainer>
          <div className="pt-4 flex flex-col">
            {allergens.map((allergen, i) => (
              <div
                className="py-4 pl-2 text-[18px] font-poppins hover:bg-primary-hover"
                key={i}
              >
                {allergen.name}
              </div>
            ))}
          </div>
          <div className="absolute bottom-[80px] right-5 h-20">
            <RegularButton
              onClick={() => router.push("/allergens-management/new-allergen")}
              color="primary-fourth"
              className="p-4"
            >
              Make new allergen
            </RegularButton>
          </div>
        </PanelContainer>
      </div>
    </>
  );
};

export default AllergensManagement;
