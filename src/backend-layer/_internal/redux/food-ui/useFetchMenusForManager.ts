import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useGetUserId } from "../session/useGetUserId";
import { menusManagerFetchStatus } from "./foodUISelector";
import { fetchMenusForManagerAsync } from "./fetchMenusForManagerAsync";

export const useFetchMenusForManager = () => {
  const dispatch = useAppDispatch();
  const getManagerId = useGetUserId();
  const status = useAppSelector(menusManagerFetchStatus);
  useEffect(() => {
    const managerId = getManagerId();
    if (status === "NOTFETCHED" && managerId !== "") {
      dispatch(fetchMenusForManagerAsync(managerId));
    }
  }, [dispatch, getManagerId, status]);
};
