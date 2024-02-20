import { useAppDispatch } from "../../store";
import { fetchFoodsByUserIdAsync } from "./fetchFoodsByUserIdAsync";

export const useFetchFoodsByUserId = () => {
  const dispatch = useAppDispatch();
  return (userId: string) => {
    dispatch(fetchFoodsByUserIdAsync(userId));
  };
};
