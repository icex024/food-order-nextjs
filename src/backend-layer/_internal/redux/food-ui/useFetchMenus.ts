import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchMenusAsync } from "./fetchMenusAsync";
import { selectedMenus } from "./foodUISelector";

export const useFetchMenus = (id: string) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMenusAsync({ id }));
  }, [dispatch, id]);
  return useAppSelector(selectedMenus);
};
