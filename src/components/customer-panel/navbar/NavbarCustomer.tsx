export const NavbarCustomer = () => {
  return (
    <div className="h-[60px] w-full bg-primary-fourth sticky top-0 px-3">
      <div className="flex justify-between h-[60px] py-[15px]">
        <div className="flex gap-3">
          <div className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2">
            Restaurants
          </div>
          <div className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2">
            Orders
          </div>
        </div>
        <div className="text-white text-[20px] font-poppins hover:cursor-pointer hover:border-b-2">
          Log out
        </div>
      </div>
    </div>
  );
};
