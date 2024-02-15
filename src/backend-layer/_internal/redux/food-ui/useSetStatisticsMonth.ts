import { useAppDispatch } from "../../store";
import { setStatisticsMonth } from "./foodUISlice";

export const useSetStatisticsMonth = () => {
  const dispatch = useAppDispatch();
  return (num: number) => {
    dispatch(setStatisticsMonth(num));
  };
};
