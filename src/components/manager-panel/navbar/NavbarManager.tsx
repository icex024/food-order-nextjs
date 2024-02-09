import { useRouter } from "next/router";

export const NavbarManager = () => {
  const router = useRouter();
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
          <div className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2">
            Others...
          </div>
        </div>
        <div className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2">
          Log out
        </div>
      </div>
    </div>
  );
};
