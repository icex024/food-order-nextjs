import { MakeItemDto } from "@/components/manager-panel/page-components/make-new-item-store/makeNewItemContext";
import { useAppDispatch } from "../../store";
import { createFoodAsync } from "./createFoodAsync";

export const useCreateFood = () => {
  const dispatch = useAppDispatch();
  return (dto: MakeItemDto,image:any) => {
    dispatch(createFoodAsync({dto,image}));
  };
};
