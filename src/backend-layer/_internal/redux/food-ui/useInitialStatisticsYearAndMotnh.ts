import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setStatisticsMonth, setStatisticsYear } from "./foodUISlice";

export const useInitialStatisticsYearAndMotnh = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const date = new Date();
    console.log(date.getMonth());
    dispatch(setStatisticsMonth(date.getMonth() + 1));
    dispatch(setStatisticsYear(date.getFullYear()));
  }, [dispatch]);
};
