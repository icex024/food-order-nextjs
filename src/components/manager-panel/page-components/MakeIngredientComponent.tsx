import { CheckboxInput, RegularTextInput } from "@/components/inputs";
import {
  useAddIngredientContext,
  useAddIngredientsAllergen,
  useRemoveIngredientsAllergen,
  useSetIngredientMeatFree,
  useSetIngredientName,
} from "./make-ingredient-store";
import {
  useAllAllergens,
  useFetchAllergensIfNeeded,
} from "@/backend-layer/food-ui";
import { FC, useState } from "react";
import { AllergenDto } from "@/backend-layer/_internal/redux/food-ui/FoodInterface";
import classNames from "classnames";
import { RegularButton } from "@/components/buttons";
import { useRouter } from "next/router";

export const MakeIngredientComponent = () => {
  const [_, setIngredientName] = useSetIngredientName();
  const [meatFree, isMeatFree] = useSetIngredientMeatFree();
  useFetchAllergensIfNeeded();
  const allergens = useAllAllergens();
  const router = useRouter();
  const makeIngredient = useAddIngredientContext();
  return (
    <div className="flex flex-col gap-2 max-w-[512px] w-full mx-auto bg-white p-4 place-self-center rounded-lg shadow-lg">
      <div>
        <div className="text-[18px] font-poppins mb-2">Ingredient name:</div>
        <div>
          <RegularTextInput setState={setIngredientName} />
        </div>
      </div>
      <div className="flex items-center ">
        <div className="text-[18px] font-poppins mr-4">Is meat free?</div>
        <CheckboxInput setState={isMeatFree} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Allergens:</div>
        {allergens.map((allergen, i) => (
          <AllergenDiv key={i} allergen={allergen} />
        ))}
      </div>
      <div className="flex gap-2">
        <RegularButton
          onClick={() => router.push("/ingredients-management")}
          color="white"
        >
          Back
        </RegularButton>
        <RegularButton
          onClick={() => {
            makeIngredient();
            router.push("/ingredients-management");
          }}
          color="primary-fourth"
        >
          Make ingredient
        </RegularButton>
      </div>
    </div>
  );
};

const AllergenDiv: FC<{ allergen: AllergenDto }> = ({ allergen }) => {
  const [selected, isSelected] = useState(false);
  const addAllergen = useAddIngredientsAllergen();
  const removeAllergen = useRemoveIngredientsAllergen();
  return (
    <div
      onClick={() => {
        if (selected) {
          removeAllergen(allergen.id);
          isSelected(false);
        } else {
          addAllergen(allergen.id);
          isSelected(true);
        }
      }}
      className={classNames("py-4 pl-2 hover:bg-primary-second bg-white", {
        "bg-primary-third": selected,
      })}
    >
      {allergen.name}
    </div>
  );
};
