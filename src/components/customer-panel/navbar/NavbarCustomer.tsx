import { useLogout } from "@/backend-layer/session";
import { useRouter } from "next/router";

export const NavbarCustomer = () => {
  const router = useRouter();
  const logout = useLogout();
  return (
    <div className="h-[60px] w-full bg-primary-fourth sticky top-0 px-3 z-50">
      <div className="flex justify-between h-[60px] py-[15px]">
        <div className="flex gap-3">
          <div
            onClick={() => router.push("/customer-panel")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Restaurants
          </div>
          <div
            onClick={() => router.push("/customer-orders")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Orders
          </div>
        </div>
        <div
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
        >
          Log out
        </div>
      </div>
    </div>
  );
};
