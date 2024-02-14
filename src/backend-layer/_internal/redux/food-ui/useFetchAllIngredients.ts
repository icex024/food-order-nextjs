import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchAllIngredients } from "./fetchAllIngredients";
import { ingredientFetchStatus } from "./foodUISelector";

export const useFetchAllIngredients = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(ingredientFetchStatus);
  useEffect(() => {
    if (status === "NOTFETCHED") {
      dispatch(fetchAllIngredients());
    }
  }, [dispatch, status]);
};
