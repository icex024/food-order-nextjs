import { useAppDispatch } from "../../store";
import { addUnitToCart } from "./orderSlice";

export const useAddUnitsToCart = () => {
  const dispatch = useAppDispatch();
  return (foodId: string, units: number) => {
    let i = 0;
    while (i < units) {
      dispatch(addUnitToCart(foodId));
      i++;
    }
  };
};
