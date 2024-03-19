import {
  useCreateUserByAdmin,
  useFetchRestaurantsIfNeeded,
  useRestaurants,
} from "@/backend-layer/restaurants-ui";
import { NavbarAdmin } from "@/components/admin-panel";
import {
  NewUserByAdminProvider,
  useCreateUserByAdminContext,
  useSetDelivererSlotsUserByAdmin,
  useSetEmailUserByAdmin,
  useSetFirstNameUserByAdmin,
  useSetLastNameUserByAdmin,
  useSetPasswordUserByAdmin,
  useSetRoleUserByAdmin,
  useSetUsernameUserByAdmin,
} from "@/components/admin-panel/new-user-by-admin";
import { RegularButton } from "@/components/buttons";
import { RegularTextInput } from "@/components/inputs";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";

const NewUser: NextPage = () => {
  useFetchRestaurantsIfNeeded();
  return (
    <>
      <NavbarAdmin></NavbarAdmin>
      <div className="bg-primary">
        <PanelContainer className="relative flex place-content-center">
          <NewUserByAdminProvider>
            <Component />
          </NewUserByAdminProvider>
        </PanelContainer>
      </div>
    </>
  );
};

export const Component = () => {
  const restaurants = useRestaurants();
  const [delivererSlots, setDelivererSlots] = useSetDelivererSlotsUserByAdmin();
  const [email, setEmail] = useSetEmailUserByAdmin();
  const [firstName, setFirstName] = useSetFirstNameUserByAdmin();
  const [lastName, setLastName] = useSetLastNameUserByAdmin();
  const [password, setPassword] = useSetPasswordUserByAdmin();
  const [role, setRole] = useSetRoleUserByAdmin();
  const [username, setUsername] = useSetUsernameUserByAdmin();
  const create = useCreateUserByAdminContext();
  const router = useRouter();
  return (
    <div className="flex flex-col gap-2 max-w-[512px] w-full mx-auto bg-white p-4 place-self-center rounded-lg shadow-lg">
      <div>
        <div className="text-[18px] font-poppins mb-2">Username:</div>
        <RegularTextInput setState={setUsername} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Password:</div>
        <RegularTextInput setState={setPassword} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">First name:</div>
        <RegularTextInput setState={setFirstName} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Last name:</div>
        <RegularTextInput setState={setLastName} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Email:</div>
        <RegularTextInput setState={setEmail} />
      </div>
      {/* <div>
        <div>Restaurant:</div>
        <select>
          <option selected disabled>
            Choose restaurant...
          </option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </div> */}
      <div>
        <div className="text-[18px] font-poppins mb-2">Role:</div>
        <div>
          <select
            onChange={(e) => setRole(e.target.value)}
            className="max-w-[512px] border-[2px] rounded-2xl border-primary-second bg-white p-1 w-full h-full px-4 focus:outline-none "
          >
            <option selected disabled>
              Choose role...
            </option>
            <option value={"MANAGER"}>Manager</option>
            <option value={"DELIVERER"}>Deliverer</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <RegularButton
          onClick={() => router.push("/users-panel")}
          color="white"
        >
          Go back
        </RegularButton>

        <RegularButton
          onClick={() => {
            create();
            router.push("/users-panel");
          }}
          color="primary-fourth"
        >
          Create
        </RegularButton>
      </div>
    </div>
  );
};

export default NewUser;
