import { useAppSelector } from "../../store";
import { AllergenDto } from "./FoodInterface";
import { allergenById } from "./foodUISelector";

export const useGetAllergens = (allergenIds: string | string[]) => {
  let retVal: AllergenDto[] = [];
  const selector = useAppSelector;
  if (typeof allergenIds === "string") {
    selector((state) => {
      const object = allergenById(state, allergenIds);
      if (typeof object !== "undefined") {
        retVal.push(object);
      }
    });
  } else {
    allergenIds.forEach((allergenId) =>
      selector((state) => {
        const object = allergenById(state, allergenId);
        if (typeof object !== "undefined") {
          retVal.push(object);
        }
      })
    );
  }
  return retVal;
};
