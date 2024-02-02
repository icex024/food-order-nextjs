import { useAppDispatch } from "../../store";
import { setPrice } from "./orderSlice";

export const useSetPrice = (price: number) => {
  const dispatch = useAppDispatch();
  dispatch(setPrice(price));
};
