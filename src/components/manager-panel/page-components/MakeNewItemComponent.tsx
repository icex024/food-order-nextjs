import {
  CheckboxInput,
  NumberInput,
  RegularTextInput,
  TextAreaInput,
} from "@/components/inputs";
import {
  useAddNewItemIngredient,
  useCreateFoodContext,
  useRemoveNewItemIngredient,
  useSelectedIngredients,
  useSetNewItemDescription,
  useSetNewItemEstimatedTime,
  useSetNewItemImage,
  useSetNewItemMeatFree,
  useSetNewItemName,
  useSetNewItemPrice,
  useSetNewItemType,
} from "./make-new-item-store";
import { StringDropDown } from "@/components/inputs/dropdowns";
import { FoodTypeEnum } from "./make-new-item-store/makeNewItemContext";
import {
  useFetchAllIngredients,
  useGetIngredients,
} from "@/backend-layer/food-ui";
import { useAllIngredients } from "@/backend-layer/_internal/redux/food-ui/useAllIngredients";
import { FC, useState } from "react";
import { IngredientDto } from "@/backend-layer/_internal/redux/food-ui/FoodInterface";
import classNames from "classnames";
import { RegularButton } from "@/components/buttons";
import { useRouter } from "next/router";

export const MakeNewItemComponent = () => {
  useFetchAllIngredients();
  const router = useRouter();

  const ingredients = useAllIngredients();
  const [name, setName] = useSetNewItemName();
  const [description, setDescription] = useSetNewItemDescription();
  const [type, setType] = useSetNewItemType();
  const [estimatedTime, setEstimatedTime] = useSetNewItemEstimatedTime();
  const [price, setPrice] = useSetNewItemPrice();
  const [meatFree, isMeatFree] = useSetNewItemMeatFree();
  const setImage = useSetNewItemImage();
  const selectedIngredients = useSelectedIngredients();
  const createFood = useCreateFoodContext();
  return (
    <div className="max-w-[512px] w-full bg-white p-4 rounded-lg shadow-lg place-self-center mx-auto mt-4">
      <div className="mb-1">
        <div className="text-[18px] font-poppins mb-2">Food name:</div>
        <RegularTextInput setState={setName} />
      </div>
      <div className="mb-1">
        <div className="text-[18px] font-poppins mb-2">Food type:</div>
        <select
          onChange={(e) => setType(returnCorretEnumValue(e.target.value))}
          className=" border-[2px] rounded-2xl border-primary-second bg-white p-1 w-full h-full px-4 focus:outline-none"
        >
          <option selected disabled>
            Please pick type
          </option>
          {Object.keys(FoodTypeEnum).map((value, i) => (
            <option key={i} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-1">
        <div className="text-[18px] font-poppins mb-2">Ingredients:</div>
        <div className="max-h-[350px] overflow-y-auto">
          {ingredients.map((ingredient, i) => (
            <IngredientItem
              ingredient={ingredient}
              selected={selectedIngredients[ingredient.id] ? true : false}
              key={i}
            />
          ))}
        </div>
      </div>
      <div className="mb-1">
        <div className="text-[18px] font-poppins mb-2">Meat free?</div>
        <CheckboxInput setState={isMeatFree} />
      </div>
      <div className="mb-1">
        <div className="text-[18px] font-poppins mb-2">Description:</div>
        <TextAreaInput setState={setDescription} />
      </div>
      <div className="mb-1">
        <div className="text-[18px] font-poppins mb-2">Price:</div>
        <NumberInput value={price} setState={setPrice} min="1" />
      </div>
      <div className="mb-1">
        <div className="text-[18px] font-poppins mb-2">
          Estimated time of making:
        </div>
        <NumberInput
          value={estimatedTime}
          setState={setEstimatedTime}
          min="1"
        />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Image:</div>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files !== null) {
              console.log(e.target.files[0]);
              setImage(e.target.files[0]);
            }
          }}
        />
      </div>
      <div className="flex gap-2 mt-2">
        <RegularButton
          onClick={() => router.push("/menu-management")}
          color="white"
        >
          Back
        </RegularButton>
        <RegularButton
          onClick={() => {
            createFood();
            // router.push("/menu-management");
          }}
          color="primary-fourth"
        >
          Make new item
        </RegularButton>
      </div>
    </div>
  );
};

function returnCorretEnumValue(value: string) {
  return Object.values(FoodTypeEnum)[Object.keys(FoodTypeEnum).indexOf(value)];
}

export const IngredientItem: FC<{
  ingredient: IngredientDto;
  selected: boolean;
}> = ({ ingredient, selected }) => {
  const [clicked, setClicked] = useState(selected);
  const add = useAddNewItemIngredient();
  const remove = useRemoveNewItemIngredient();
  return (
    <div
      className={classNames(
        "w-full cursor-pointer p-2 hover:bg-primary-second select-none",
        {
          "bg-primary-second": clicked,
        }
      )}
      onClick={() => {
        clicked ? remove(ingredient.id) : add(ingredient.id);
        setClicked((state) => !state);
      }}
    >
      {ingredient.name}
    </div>
  );
};
