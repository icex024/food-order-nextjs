import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchAllergensAsync } from "./fetchAllergensAsync";
import { selectAllergens } from "./foodUISelector";

export const useFetchAllergensIfNeeded = () => {
  const allergens = useAppSelector(selectAllergens);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (allergens.length == 0) {
      dispatch(fetchAllergensAsync());
    }
  });
};
