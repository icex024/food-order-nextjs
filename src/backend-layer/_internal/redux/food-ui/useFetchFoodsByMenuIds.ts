import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchFoodsForMenuAsync } from "./fetchFoodsForMenuAsync";
import { foodsFetchStatus } from "./foodUISelector";

export const useFetchFoodsByMenuIds = (ids: string[]) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(foodsFetchStatus);
  useEffect(() => {
    if (status === "NOTFETCHED" && ids.length !== 0) {
      ids.forEach((menuId) => dispatch(fetchFoodsForMenuAsync({ menuId }))); //ovde ce izgleda morati jedan endpoint, bagavo je bas
    }
  }, [dispatch, ids, status]);
};
