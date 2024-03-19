import { useAppSelector } from "../../store";
import { fetchedUsers } from "./restaurantsUiSelector";

export const useFetchedUsers = () => {
  return useAppSelector(fetchedUsers);
};
