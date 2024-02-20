import { ViewOrderDto } from "@/backend-layer/_internal/redux/order/OrderInterface";
import { FC } from "react";
import { calculateUnits } from "../customer-panel/order/calculateUnits";
import {
  useFetchFoodsByMenuIds,
  useFetchFoodsByUserIdIfNeeded,
  useFetchMenus,
  useGetFood,
} from "@/backend-layer/food-ui";
import classNames from "classnames";
import { RegularButton } from "../buttons";
import {
  useCancelDeliveryForDeliverer,
  useFinishDelivery,
  useTakeOrder,
} from "@/backend-layer/order";

interface Props {
  orders: ViewOrderDto[];
  className?: string;
}

export const OrdersContainer: FC<Props> = ({ orders, className = "" }) => {
  return (
    <div className="flex gap-4 flex-wrap pt-4">
      {orders.map((order, i) => (
        <OrderItem order={order} key={i}></OrderItem>
      ))}
    </div>
  );
};

function checkOrder(order: ViewOrderDto | undefined) {
  return typeof order === "undefined" ? "" : order.restaurantId;
}

const OrderItem: FC<{
  order: ViewOrderDto;
}> = ({ order }) => {
  const foodDictionary = calculateUnits(order.foodIds);
  const date = new Date(order.timeOfMakingOrder);
  return (
    <div className="flex flex-col justify-between max-w-[256px] w-full rounded-xl overflow-hidden shadow-xl bg-white p-4">
      <div className="flex flex-col gap-1 mb-2">
        <div className="font-poppins text-[18px]">Food items:</div>
        <div>
          {Object.keys(foodDictionary).map((food, i) => (
            <OrderUnits
              fontSize="text-[14px]"
              foodId={food}
              units={foodDictionary[food]}
              key={i}
            />
          ))}
        </div>
        <div className="font-poppins text-[18px] ">Note:</div>
        <div className="font-poppins text-[14px]">{order.note}</div>
        <div className="font-poppins text-[18px]">Price:</div>
        <div className="font-poppins text-[14px]">{order.price}</div>
        <div className="font-poppins text-[18px]">Payment type:</div>
        <div className="font-poppins text-[14px]">{order.paymentType}</div>
        <div className="font-poppins text-[18px]">Adress:</div>
        <div className="font-poppins text-[14px]">{order.address}</div>
        <div className="font-poppins text-[18px]">Time of order:</div>
        <div className="font-poppins text-[14px] ">{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}. ${
          date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
        }:${
          date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
        }`}</div>
        <div className="font-poppins text-[18px]">Status:</div>
        <div className="font-poppins text-[14px]">{order.status}</div>
      </div>
      <div>
        <ButtonManager orderId={order.id} type={order.status} />
      </div>
    </div>
  );
};

const OrderUnits: FC<{
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

const ButtonManager: FC<{
  type: string;
  orderId: string;
}> = ({ type, orderId }) => {
  const takeOrder = useTakeOrder();
  const cancelOrder = useCancelDeliveryForDeliverer();
  const finish = useFinishDelivery();
  switch (type) {
    case "PROCESS":
      return (
        <RegularButton color="primary-fourth" disabled>
          In Process
        </RegularButton>
      );
    case "READY":
      return (
        <RegularButton
          onClick={() => takeOrder(orderId)}
          color="primary-fourth"
        >
          Take It
        </RegularButton>
      );
    case "TAKEN_BY_DELIVERER":
      return (
        <RegularButton onClick={() => cancelOrder(orderId)} color="red">
          Remove
        </RegularButton>
      );
    case "CANCELLED":
      return (
        <RegularButton color="white" disabled>
          Cancelled
        </RegularButton>
      );
    case "IN_DELIVERY":
      return (
        <RegularButton onClick={() => finish(orderId)} color="white">
          End delivery
        </RegularButton>
      );
    case "DELIVERED":
      return <></>;
    default:
      return <></>;
  }
};
