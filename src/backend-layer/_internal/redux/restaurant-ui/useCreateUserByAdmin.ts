import { CreateUserByAdminDto } from "@/components/admin-panel/new-user-by-admin/newUserByAdminContext";
import { useAppDispatch } from "../../store";
import { createUserByAdminAsync } from "./createUserByAdminAsync";

export const useCreateUserByAdmin = () => {
  const dispatch = useAppDispatch();
  return (dto: CreateUserByAdminDto) => {
    dispatch(createUserByAdminAsync(dto));
  };
};
