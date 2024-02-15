import {
  CheckboxInput,
  NumberInput,
  RegularTextInput,
} from "@/components/inputs";
import {
  useChangeMakeLoyaltyReset,
  useSetMakeLoyaltyDiscount,
  useSetMakeLoyaltyFreeDrink,
  useSetMakeLoyaltyThreshold,
} from "./make-loyalty-store";
import { StringDropDown } from "@/components/inputs/dropdowns";
import { useState } from "react";
import {
  useFetchFoodStatistics,
  useFetchFoodsByMenuIds,
  useFoodStatistics,
} from "@/backend-layer/food-ui";
import { useFetchDrinks } from "@/backend-layer/loyalty";
import { RegularButton } from "@/components/buttons";
import { useMakeNewLoyaltyContext } from "./make-loyalty-store/makeLoyaltyHooks";
import { useRouter } from "next/router";

export const MakeLoyaltyComponent = () => {
  const [type, setType] = useSetType();
  const [threshold, setThreshold] = useSetMakeLoyaltyThreshold();
  const setReset = useChangeMakeLoyaltyReset();
  const [discount, setDiscount] = useSetMakeLoyaltyDiscount();
  const setDrink = useSetMakeLoyaltyFreeDrink();
  const drinks = useFetchDrinks();
  const makeLoyalty = useMakeNewLoyaltyContext();
  const router = useRouter();
  return (
    <div className="mx-auto my-auto flex flex-col gap-2 max-w-[512px] w-full bg-white rounded-lg shadow-md p-4 place-self-center">
      <div className="flex justify-between content-center">
        <div className="text-[24px] font-poppins">Set threshold:</div>
        <div className="w-[100px]">
          <NumberInput value={threshold} setState={setThreshold} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[24px] font-poppins">Resettable?</div>
        <div>
          {" "}
          <CheckboxInput setState={setReset} />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[24px] font-poppins">Type:</div>
        <div>
          <StringDropDown
            setValue={setType}
            valueArray={["Discount", "Free drink"]}
            selected="Discount"
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        {type === "Discount" ? (
          <>
            <div className="text-[24px] font-poppins">
              Set discount in percentage:
            </div>
            <div>
              <NumberInput value={discount} setState={setDiscount} min="1" />
            </div>
          </>
        ) : (
          <>
            <div className="flex-grow text-[24px] font-poppins">
              Choose drink:
            </div>
            <div className="flex-grow">
              <select
                onChange={(e) => setDrink(e.target.value)}
                className=" max-w-[300px] border-[2px] rounded-2xl border-primary-second bg-white p-1 w-full h-full px-4 focus:outline-none"
              >
                <option selected disabled>
                  Choose drink...
                </option>
                {drinks.map((drink, i) => (
                  <option key={i} value={drink.id}>
                    {drink.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
      </div>
      <div>
        <RegularButton
          onClick={() => {
            makeLoyalty();
            router.push("/loyalty-panel/");
          }}
          color="primary-fourth"
        >
          Make New Loyalty
        </RegularButton>
      </div>
    </div>
  );
};

const useSetType = (): [string, (value: string) => void] => {
  const [type, setType] = useState<string>("Discount");
  return [type, (value: string) => setType(value)];
};
