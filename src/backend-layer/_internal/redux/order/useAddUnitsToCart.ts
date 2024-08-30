import { useAppDispatch } from "../../store";
import { addUnitToCart } from "./orderSlice";

export const useAddUnitsToCart = () => {
  const dispatch = useAppDispatch();
  return (id: string, name: string, price: number, units: number) => {
    let i = 0;
    while (i < units) {
      dispatch(addUnitToCart({ id, name, price }));
      i++;
    }
  };
};
