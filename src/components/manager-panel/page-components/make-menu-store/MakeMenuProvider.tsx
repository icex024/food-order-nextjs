import { ReactNode, useEffect, useReducer } from "react";
import {
  MakeMenuContext,
  MakeMenuContextInterface,
  MakeMenuDto,
  makeMenuContextInterfaceDefaultValues,
} from "./makeMenuContext";
import { useGetUserId } from "@/backend-layer/session";

export const MakeMenuProvider = ({ children }: { children: ReactNode }) => {
  const [makeMenuState, dispatchMakeMenuState] = useReducer(
    dispatchMakeMenu,
    makeMenuContextInterfaceDefaultValues().makeMenuDto
  );

  const managerId = useGetUserId();

  useEffect(() => {
    dispatchMakeMenuState({ ...makeMenuState, managerId: managerId() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values: MakeMenuContextInterface = {
    makeMenuDto: makeMenuState,
    updateState: (updateDiff) =>
      dispatchMakeMenuState({ ...makeMenuState, ...updateDiff }),
  };

  return (
    <MakeMenuContext.Provider value={values}>
      {children}
    </MakeMenuContext.Provider>
  );
};

const dispatchMakeMenu = (state: MakeMenuDto, action: MakeMenuDto) => {
  state = { ...action };
  return state;
};
