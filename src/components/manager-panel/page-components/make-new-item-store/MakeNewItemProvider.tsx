import { ReactNode, useEffect, useReducer } from "react";
import {
  MakeItemDto,
  MakeNewItemContextInterface,
  NewItemContext,
  createMakeNewItemContextInterfaceWithDefultValues,
} from "./makeNewItemContext";
import { useRouter } from "next/router";

export const MakeNewItemProvider = ({ children }: { children: ReactNode }) => {
  const [initialState, dispatchState] = useReducer(
    dispatchNewItemState,
    createMakeNewItemContextInterfaceWithDefultValues().makeItemDto
  );

  const [image, dispatchImage] = useReducer(
    dispatchImageState,
    createMakeNewItemContextInterfaceWithDefultValues().image
  );

  const router = useRouter();

  useEffect(() => {
    const { menuId } = router.query;
    console.log(menuId);
    if (typeof menuId === "string") {
      dispatchState({ ...initialState, menuId });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: MakeNewItemContextInterface = {
    makeItemDto: initialState,
    dispatchState: (updateDiff) =>
      dispatchState({ ...initialState, ...updateDiff }),
    image: image,
    dispatchImage: (image) => dispatchImage(image),
  };

  return (
    <NewItemContext.Provider value={value}>{children}</NewItemContext.Provider>
  );
};

const dispatchNewItemState = (state: MakeItemDto, action: MakeItemDto) => {
  state = { ...action };
  return state;
};

const dispatchImageState = (state: any, action: any) => {
  state = action;
  return state;
};
