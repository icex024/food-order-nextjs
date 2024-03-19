import { ManagerOrDeliverePreview } from "@/backend-layer/_internal/redux/restaurant-ui/restaurantsUiSlice";
import { useFetchedUsers } from "@/backend-layer/restaurants-ui";
import { RegularButton } from "../buttons";
import { useRole } from "@/backend-layer/session";
import { useRouter } from "next/router";

export const UsersContainer = () => {
  const users = useFetchedUsers();
  return (
    <div className="flex pt-4 gap-4">
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

const User = ({ user }: { user: ManagerOrDeliverePreview }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-between p-3 bg-white rounded-lg shadow-md">
      <div className="flex flex-col gap-2 mb-2">
        {" "}
        <div>
          <div>Name:</div>
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
        <div>
          <div>Resturant name:</div>
          <div>{user.restaurantName}</div>
        </div>
        <div>
          <div>Role:</div>
          <div>{user.role}</div>
        </div>
      </div>
      <div>
        <RegularButton
          color="primary-fourth"
          className="p-2"
          onClick={() =>
            router.push("users-panel/change-restaurant?id=" + user.id)
          }
        >
          Change restaurant
        </RegularButton>
      </div>
    </div>
  );
};
