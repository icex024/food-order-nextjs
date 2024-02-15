import { useAppDispatch } from "../../store";
import { addAllergenAsync } from "./addAllergenAsync";

export const useAddAllergen = () => {
  const dispatch = useAppDispatch();

  return (name: string) => {
    dispatch(addAllergenAsync(name));
  };
};
