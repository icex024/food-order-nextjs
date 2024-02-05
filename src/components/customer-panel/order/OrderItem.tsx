import { useGetFood } from "@/backend-layer/food-ui";
import classNames from "classnames";
import { FC } from "react";

export const OrderItem: FC<{
  foodId: string;
  units: number;
  fontSize?: string;
}> = ({ foodId, units, fontSize = "text-[24px]" }) => {
  const food = useGetFood(foodId);
  return (
    <div className={classNames("flex justify-between font-poppins", fontSize)}>
      <div>{food.name} </div>
      <div>x{units}</div>
    </div>
  );
};
