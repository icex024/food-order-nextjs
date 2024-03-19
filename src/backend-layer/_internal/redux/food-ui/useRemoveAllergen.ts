import { useAppDispatch } from "../../store";
import { deleteAllergen } from "./foodUISlice";
import { removeAllergenAsync } from "./removeAllergenAsync";

export const useRemoveAllergen = () => {
  const dispatch = useAppDispatch();
  return (allergenId: string) => {
    dispatch(removeAllergenAsync(allergenId));
    dispatch(deleteAllergen(allergenId));
  };
};
