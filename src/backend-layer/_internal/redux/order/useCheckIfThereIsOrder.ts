import { useRouter } from "next/router";
import { useAppSelector } from "../../store";
import { selectedFoods } from "./orderSelectors";

export const useCheckIfThereIsOrder = () => {
  const foods = useAppSelector(selectedFoods);
  const router = useRouter();
  return () => {
    if (foods.length == 0) {
      alert("Please pick some food from menus!");
    } else {
      router.push("/restaurant-preview/review-order");
    }
  };
};
