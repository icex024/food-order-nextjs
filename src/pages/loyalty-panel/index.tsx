import { useFetchLoyaltyDefinitionsIfNeeded } from "@/backend-layer/loyalty";
import { RegularButton } from "@/components/buttons";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { ShowLoyaltiesComponent } from "@/components/manager-panel/page-components";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";

const LoyaltyPanel: NextPage = () => {
  useFetchLoyaltyDefinitionsIfNeeded();
  const router = useRouter();
  return (
    <>
      <NavbarManager />
      <div className="relative bg-primary">
        <PanelContainer>
          <ShowLoyaltiesComponent />
          <div className="absolute bottom-[80px] right-5 h-20">
            <RegularButton
              onClick={() => router.push("/loyalty-panel/create-loyalty")}
              color="primary-fourth"
              className="p-4"
            >
              Make new loyalty
            </RegularButton>
          </div>
        </PanelContainer>
      </div>
    </>
  );
};

export default LoyaltyPanel;
