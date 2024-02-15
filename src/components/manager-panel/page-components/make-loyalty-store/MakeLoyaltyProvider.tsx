import { ReactNode, useEffect, useReducer } from "react";
import {
  MakeLoyaltyContext,
  MakeLoyaltyDto,
  MakeLoyaltyInterface,
  createMakeLoyaltyContextDefaultValues,
} from "./makeLoyaltyContext";
import { useGetUserId } from "@/backend-layer/session";

function MakeLoyaltyProvider({ children }: { children?: ReactNode }) {
  const [makeLoyaltyState, disptchMakeLoyaltyState] = useReducer(
    dispatchMakeLoyalty,
    createMakeLoyaltyContextDefaultValues().makeLoyaltyDto
  );

  const managerId = useGetUserId();

  useEffect(() => {
    disptchMakeLoyaltyState({ ...makeLoyaltyState, managerId: managerId() });
    console.log("test proba alalalala");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: MakeLoyaltyInterface = {
    makeLoyaltyDto: makeLoyaltyState,
    dispatchState: (updateDiff) => {
      disptchMakeLoyaltyState({ ...makeLoyaltyState, ...updateDiff });
    },
  };
  return (
    <MakeLoyaltyContext.Provider value={value}>
      {children}
    </MakeLoyaltyContext.Provider>
  );
}

const dispatchMakeLoyalty = (state: MakeLoyaltyDto, action: MakeLoyaltyDto) => {
  state = { ...action };
  return state;
};

export default MakeLoyaltyProvider;
