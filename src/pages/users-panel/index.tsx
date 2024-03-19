import { useFetchUsersIfNeeded } from "@/backend-layer/restaurants-ui";
import { NavbarAdmin, UsersContainer } from "@/components/admin-panel";
import { RegularButton } from "@/components/buttons";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";

const UsersPanel: NextPage = () => {
  useFetchUsersIfNeeded();
  const router = useRouter();
  return (
    <>
      <NavbarAdmin />
      <div className="bg-primary relative">
        <PanelContainer>
          <UsersContainer />
        </PanelContainer>
        <div className="absolute bottom-[80px] right-5 h-20">
          <RegularButton
            onClick={() => router.push("/users-panel/new-user")}
            color="primary-fourth"
            className="p-4"
          >
            Make new user
          </RegularButton>
        </div>
      </div>
    </>
  );
};

export default UsersPanel;
