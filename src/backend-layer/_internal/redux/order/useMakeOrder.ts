import { useAppDispatch } from "../../store";
import { makeOrderAsync } from "./makeOrderAsnyc";
import { clearOrder, setNote } from "./orderSlice";

export const useMakeOrder = () => {
  const dispatch = useAppDispatch();
  return (note: string) => {
    dispatch(setNote(note));
    dispatch(makeOrderAsync());
    dispatch(clearOrder());
  };
};
