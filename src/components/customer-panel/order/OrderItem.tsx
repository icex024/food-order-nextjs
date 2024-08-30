import { FoodForOrderDto } from "@/backend-layer/_internal/redux/order/OrderInterface";
import { useGetFood } from "@/backend-layer/food-ui";
import classNames from "classnames";
import { FC } from "react";

export const OrderItem: FC<{
  food: { id: string; name: string; units: number };
  fontSize?: string;
}> = ({ food, fontSize = "text-[24px]" }) => {
  return (
    <div className={classNames("flex justify-between font-poppins", fontSize)}>
      <div>{food.name} </div>
      <div>x{food.units}</div>
    </div>
  );
};
