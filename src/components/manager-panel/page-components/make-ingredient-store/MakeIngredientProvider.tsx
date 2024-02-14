import { ReactNode, useReducer } from "react";
import {
  IngredientContextInterface,
  MakeIngredientContext,
  MakeIngredientDto,
  createIngredientContextInterfaceDefaultValues,
} from "./makeIngredientContext";

export const MakeIngredientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [initialState, dispatchState] = useReducer(
    dispatchStateReducer,
    createIngredientContextInterfaceDefaultValues().makeIngredientDto
  );

  const values: IngredientContextInterface = {
    makeIngredientDto: initialState,
    dispatchState: (updateDiff) =>
      dispatchState({ ...initialState, ...updateDiff }),
  };

  return (
    <MakeIngredientContext.Provider
      value={values}
    ></MakeIngredientContext.Provider>
  );
};

function dispatchStateReducer(
  state: MakeIngredientDto,
  action: MakeIngredientDto
) {
  state = { ...action };
  return state;
}
