import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchFoodsForMenuAsync } from "./fetchFoodsForMenuAsync";

export const useFetchFoodsByMenuIds =(ids:string[])=>{
  const dispatch = useAppDispatch();
  useEffect(() => {
    ids.forEach((menuId)=> dispatch(fetchFoodsForMenuAsync({ menuId })))
  }, [dispatch, ids]);
}