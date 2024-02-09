import { useEffect } from "react";
import { useAppDispatch } from "../../store";
import { fetchFoodStatisticsAsync } from "./fetchFoodStatisticsAsync";
import { useGetUserId } from "../session/useGetUserId";
import { useSelectedStatisticsMonth } from "./useSelectedStatisticsMonth";
import { useSelectedStatisticsYear } from "./useSelectedStatisticsYear";
import { useInitialStatisticsYearAndMotnh } from "./useInitialStatisticsYearAndMotnh";

export const useFetchFoodStatistics = () => {
  const dispatch = useAppDispatch();
  const getId = useGetUserId();
  const month = useSelectedStatisticsMonth();
  const year = useSelectedStatisticsYear();
  useEffect(() => {
    const managerId = getId();
    const date = `${year}-${month < 10 ? "0" + month : month}-01T00:00:00`;
    dispatch(fetchFoodStatisticsAsync({ managerId, date }));
    console.log("uslo");
  }, [dispatch, getId, year, month]);
};
