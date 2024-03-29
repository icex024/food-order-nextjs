import { useLogout } from "@/backend-layer/session";
import { useRouter } from "next/router";

export const NavbarManager = () => {
  const router = useRouter();
  const logout = useLogout();
  return (
    <div className="h-[60px] w-full bg-primary-fourth sticky top-0 px-3 z-50">
      <div className="flex justify-between h-[60px] py-[15px]">
        <div className="flex gap-3">
          <div
            onClick={() => router.push("/manager-panel")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Statistics
          </div>
          <div
            onClick={() => router.push("/loyalty-panel")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Loyalty
          </div>
          <div
            onClick={() => router.push("/menu-management")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Menus
          </div>
          <div
            onClick={() => router.push("/ingredients-management")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Ingredients
          </div>
          <div
            onClick={() => router.push("/allergens-management")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Allergens
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
