import { useAppSelector } from "../../store";
import { loyalties } from "./loyaltySelectors";

export const useLoyalties = () => {
  return useAppSelector(loyalties);
};
