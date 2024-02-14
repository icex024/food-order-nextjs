import { RegularTextInput } from "@/components/inputs";
import { useSetMenuName } from "./make-menu-store";
import { useMakeMenuContext } from "./make-menu-store/makeMenuHooks";
import { useRouter } from "next/router";
import { RegularButton } from "@/components/buttons";

export const MakeMenuComponent = () => {
  const [, setName] = useSetMenuName();
  const makeMenu = useMakeMenuContext();
  const router = useRouter();
  return (
    <div className=" max-w-[512px] w-full p-4 bg-white shadow-md rounded-md place-self-center mx-auto">
      <div className="font-poppins text-[18px] mb-2">Menu name:</div>
      <RegularTextInput setState={setName} />
      <div className="flex gap-2 mt-4">
        <RegularButton
          onClick={() => {
            router.push("/menu-management");
          }}
          color="white"
        >
          Back
        </RegularButton>
        <RegularButton
          onClick={() => {
            makeMenu();
            router.push("/menu-management");
          }}
          color="primary-fourth"
        >
          Make menu
        </RegularButton>
      </div>
    </div>
  );
};
