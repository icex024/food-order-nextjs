import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchAllIngredients } from "./fetchAllIngredients";

export const useFetchAllIngredients = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllIngredients());
  }, [dispatch]);
};
