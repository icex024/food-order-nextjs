import { MakeLoyaltyDto } from "@/components/manager-panel/page-components/make-loyalty-store/makeLoyaltyContext";
import { useAppDispatch } from "../../store";
import { makeNewLoyaltyAsync } from "./makeNewLoyaltyAsync";

export const useMakeNewLoyalty = () => {
  const dispatch = useAppDispatch();
  return (dto: MakeLoyaltyDto) => {
    dispatch(makeNewLoyaltyAsync(dto));
  };
};
