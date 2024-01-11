import {
  useFetchAllIngredients,
  useFetchAllergensIfNeeded,
  useFetchFoodsByMenuId,
  useFetchRestaurantById,
  useSelectedFoods,
  useSetRestaurantId,
} from "@/backend-layer/food-ui";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

const TestFetching: NextPage = () => {
  useFetchAllergensIfNeeded();
  useFetchFoodsByMenuId("5fc2dd31-415c-44c9-8f9b-bfa80c1e746e");

  const foods = useSelectedFoods();
  const flag = foods["5fc2dd31-415c-44c9-8f9b-bfa80c1e746e"]?.find(
    (food) => food.id == "03ad4dfc-c7fe-4282-ada2-23ffe116abd6"
  );
  const src = `data:image/png;base64,${flag?.image}`;

  const setRestaurant = useSetRestaurantId();

  setRestaurant("0f2fc991-b9fb-4aa7-8951-5965ec0cebb8");

  useFetchRestaurantById();
  useFetchAllIngredients();
  return (
    <>
      Prika moj testing
      <div>
        {<Image src={src} alt="" width={800} height={800} />}
        {}
      </div>
    </>
  );
};

export default TestFetching;
