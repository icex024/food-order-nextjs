import {
  useAllAllergens,
  useFetchAllergensIfNeeded,
  useRemoveAllergen,
} from "@/backend-layer/food-ui";
import { useRole } from "@/backend-layer/session";
import { NavbarAdmin } from "@/components/admin-panel";
import { RegularButton } from "@/components/buttons";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { PanelContainer } from "@/components/sections";
import classNames from "classnames";
import { NextPage } from "next";
import { useRouter } from "next/router";

const AllergensManagement: NextPage = () => {
  useFetchAllergensIfNeeded();
  const allergens = useAllAllergens();
  const router = useRouter();
  const role = useRole();
  const removeAllergen = useRemoveAllergen();
  return (
    <>
      {role === "MANAGER" ? (
        <NavbarManager></NavbarManager>
      ) : (
        <NavbarAdmin></NavbarAdmin>
      )}
      <div className="bg-primary relative">
        <PanelContainer>
          <div className="pt-4 flex flex-col">
            {allergens.map((allergen, i) => (
              <div
                className={classNames(
                  "py-4 pl-2 text-[18px] font-poppins hover:bg-primary-hover",
                  { "w-1/3": role === "ADMIN" }
                )}
                key={i}
              >
                {allergen.name}
                {role === "ADMIN" && (
                  <div>
                    <RegularButton
                      onClick={() => {
                        removeAllergen(allergen.id);
                      }}
                      color="red"
                    >
                      Remove
                    </RegularButton>
                  </div>
                )}
              </div>
            ))}
          </div>
          {role !== "ADMIN" && (
            <div className="absolute bottom-[80px] right-5 h-20">
              <RegularButton
                onClick={() =>
                  router.push("/allergens-management/new-allergen")
                }
                color="primary-fourth"
                className="p-4"
              >
                Make new allergen
              </RegularButton>
            </div>
          )}
        </PanelContainer>
      </div>
    </>
  );
};

export default AllergensManagement;
