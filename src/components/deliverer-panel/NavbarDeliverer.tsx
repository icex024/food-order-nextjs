import { useRouter } from "next/router";

export const NavbarDeliverer = () => {
  const router = useRouter();
  return (
    <div className="h-[60px] w-full bg-primary-fourth sticky top-0 px-3 z-50">
      <div className="flex justify-between h-[60px] py-[15px]">
        <div className="flex gap-3">
          <div
            onClick={() => router.push("/deliverer-panel")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Available
          </div>
          <div
            onClick={() => router.push("/taken-orders")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            Taken
          </div>
          <div
            onClick={() => router.push("/orders-in-delivery")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            In delivery
          </div>
          <div
            onClick={() => router.push("/deliverer-history")}
            className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2"
          >
            History
          </div>
        </div>
        <div className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2">
          Log out
        </div>
      </div>
    </div>
  );
};
