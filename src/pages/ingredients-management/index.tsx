import { IngredientDto } from "@/backend-layer/_internal/redux/food-ui/FoodInterface";
import {
  useAllIngredients,
  useFetchAllIngredients,
  useFetchAllergensIfNeeded,
  useGetAllergens,
  useRemoveIngredient,
} from "@/backend-layer/food-ui";
import { useRole } from "@/backend-layer/session";
import { NavbarAdmin } from "@/components/admin-panel";
import { RegularButton } from "@/components/buttons";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FC } from "react";

const IngredientsManagement: NextPage = () => {
  const router = useRouter();
  useFetchAllIngredients();
  useFetchAllergensIfNeeded();
  const ingredients = useAllIngredients();
  const role = useRole();
  return (
    <>
      {role === "MANAGER" ? (
        <NavbarManager></NavbarManager>
      ) : (
        <NavbarAdmin></NavbarAdmin>
      )}
      <div className="bg-primary relative">
        <PanelContainer>
          <div className="flex flex-wrap gap-4 pt-4">
            {ingredients.map((ingredient, i) => (
              <IngredientCard role={role} key={i} ingredient={ingredient} />
            ))}
          </div>
          {role !== "ADMIN" && (
            <div className="absolute bottom-[80px] right-5 h-20">
              <RegularButton
                onClick={() =>
                  router.push("/ingredients-management/new-ingredient")
                }
                color="primary-fourth"
                className="p-4"
              >
                Make new ingredient
              </RegularButton>
            </div>
          )}
        </PanelContainer>
      </div>
    </>
  );
};

const IngredientCard: FC<{ ingredient: IngredientDto; role: string }> = ({
  ingredient,
  role,
}) => {
  const allergens = useGetAllergens(ingredient.allergensId);
  const removeIngredient = useRemoveIngredient();
  return (
    <div className="flex flex-col justify-between max-w-[150px] w-full bg-white p-2 rounded-lg shadow-lg hover:bg-primary-hover">
      <div>{ingredient.name}</div>
      {allergens.length !== 0 && (
        <div>
          <div>Allergens:</div>
          <div>
            {allergens.map((allergen, i) => (
              <div key={i}>{allergen.name}</div>
            ))}
          </div>
        </div>
      )}
      {role === "ADMIN" && (
        <div className="mt-2">
          <RegularButton
            onClick={() => removeIngredient(ingredient.id)}
            color="red"
          >
            Remove
          </RegularButton>
        </div>
      )}
    </div>
  );
};

export default IngredientsManagement;
