import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchFoodsForMenuAsync } from "./fetchFoodsForMenuAsync";
import { selectFoods } from "./foodUISelector";

export const useFetchFoodsByMenuId = (menuId: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFoodsForMenuAsync({ menuId }));
  }, [dispatch, menuId]);
  // const foods = useAppSelector(selectFoods);
  // return foods;
};
