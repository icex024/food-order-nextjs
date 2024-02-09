import { MakeLoyaltyDto } from "@/components/manager-panel/page-components/make-loyalty-store/makeLoyaltyContext";
import { getAxios } from "../../axios-wrapper";

export const getLoyalties = (managerId: string) => {
  return getAxios().get(
    "/loyalty/get-loyalties-for-manager?managerId=" + managerId,
    { data: {} }
  );
};

export const getDrinks = (managerId: string) => {
  return getAxios().get(
    "/food/fetch-drinks-for-loyalty?managerId=" + managerId,
    { data: {} }
  );
};

export const makeLoylaty = (dto: MakeLoyaltyDto) => {
  return getAxios().post("/loyalty/create-loyalty", dto);
};
