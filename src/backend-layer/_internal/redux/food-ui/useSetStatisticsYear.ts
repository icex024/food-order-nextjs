import { useAppDispatch } from "../../store";
import { setStatisticsYear } from "./foodUISlice";

export const useSetStatisticsYear = () => {
  const dispatch = useAppDispatch();
  return (num: number) => {
    dispatch(setStatisticsYear(num));
  };
};
