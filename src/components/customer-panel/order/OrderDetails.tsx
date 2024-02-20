import { useCalculatePrice, useGetFood } from "@/backend-layer/food-ui";
import { useGetCurrentOrder, useMakeOrder } from "@/backend-layer/order";
import { RegularButton } from "@/components/buttons";
import { TextAreaInput } from "@/components/inputs";
import { FC, useState } from "react";
import { calculateUnits } from "./calculateUnits";
import { OrderItem } from "./OrderItem";
import { useRouter } from "next/router";

interface FoodUnitsDto {
  foodId: string;
  units: number;
}

export const OrderDetails = () => {
  const currentOrder = useGetCurrentOrder();
  const foodDictionary = calculateUnits(currentOrder.foodIds);
  const price = useCalculatePrice(currentOrder.foodIds);
  const [note, setNote] = useState("");
  const makeOrder = useMakeOrder();
  const router = useRouter();
  return (
    <div className="max-w-[512px] w-full">
      <div className="text-[24px] font-poppins mb-2">Order items:</div>
      {Object.keys(foodDictionary).map((foodId, i) => (
        <OrderItem key={i} foodId={foodId} units={foodDictionary[foodId]} />
      ))}
      <div className="text-[24px] font-poppins my-2">Price:</div>
      <div className="text-[24px] font-poppins">{price}RSD</div>
      <div className="text-[24px] font-poppins my-2">Note:</div>
      <TextAreaInput setState={setNote} />
      <div className="flex gap-2 px-2 mt-2">
        <RegularButton color="white">Go back</RegularButton>
        <RegularButton
          onClick={() => {
            makeOrder(note);
            router.push("/customer-panel");
          }}
          color="primary-fourth"
        >
          Make order
        </RegularButton>
      </div>
    </div>
  );
};
