import { useFetchRestaurantsIfNeeded } from "@/backend-layer/restaurants-ui";
import {
  AdminRestaurantContainer,
  NavbarAdmin,
} from "@/components/admin-panel";
import { RegularButton } from "@/components/buttons";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";

const AdminPanel: NextPage = () => {
  useFetchRestaurantsIfNeeded();
  const router = useRouter();
  return (
    <>
      <NavbarAdmin />
      <div className="bg-primary">
        <PanelContainer className="relative">
          <AdminRestaurantContainer />
          <div className="absolute bottom-[80px] right-5 h-20">
            <RegularButton
              onClick={() => router.push("/admin-panel/new-restaurant")}
              color="primary-fourth"
              className="p-4"
            >
              Make new restaurant
            </RegularButton>
          </div>
        </PanelContainer>
      </div>
    </>
  );
};

export default AdminPanel;
