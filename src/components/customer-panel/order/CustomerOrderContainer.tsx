import { ViewOrderDto } from "@/backend-layer/_internal/redux/order/OrderInterface";
import {
  useFetchFoodsByMenuId,
  useFetchFoodsByMenuIds,
  useFetchMenus,
  useGetFood,
} from "@/backend-layer/food-ui";
import {
  useCancelOrder,
  useCustomerOrdersHistory,
  useOrdersForCustomer,
} from "@/backend-layer/order";
import { FC } from "react";
import { calculateUnits } from "./calculateUnits";
import { OrderItem } from "./OrderItem";
import { RegularButton } from "@/components/buttons";

export const CustomerOrderContainer: FC<{ isInProgress: boolean }> = ({
  isInProgress,
}) => {
  const orders = useOrdersForCustomer();
  const ordersHistory = useCustomerOrdersHistory();
  return (
    <div className="flex flex-wrap gap-4 pt-4">
      {isInProgress &&
        orders.map((order, i) => <OrderCard order={order} key={i} />)}
      {!isInProgress &&
        ordersHistory.map((order, i) => <OrderCard order={order} key={i} />)}
    </div>
  );
};

const OrderCard: FC<{ order: ViewOrderDto }> = ({ order }) => {
  const menus = useFetchMenus(order.restaurantId);
  useFetchFoodsByMenuIds(menus.map((menu) => menu.id));
  const foodDictionary = calculateUnits(order.foodIds);
  const cancelOrder = useCancelOrder();
  return (
    <div className="flex flex-col justify-between max-w-[256px] w-full rounded-xl overflow-hidden shadow-xl bg-white p-4">
      <div className="flex flex-col gap-1 pb-2">
        <div className="font-poppins text-[18px]">Food items:</div>
        <div>
          {Object.keys(foodDictionary).map((food, i) => (
            <OrderItem
              fontSize="text-[18px]"
              foodId={food}
              units={foodDictionary[food]}
              key={i}
            />
          ))}
        </div>
        <div className="font-poppins text-[18px] ">Note:</div>
        <div className="font-poppins text-[18px]">{order.note}</div>
        <div className="font-poppins text-[18px]">Price:</div>
        <div className="font-poppins text-[18px]">{order.price}</div>
        <div className="font-poppins text-[18px]">Payment type:</div>
        <div className="font-poppins text-[18px]">{order.paymentType}</div>
        <div className="font-poppins text-[18px]">Restaurant name:</div>
        <div className="font-poppins text-[18px]">{order.restaurantName}</div>
        <div className="font-poppins text-[18px]">Time of order:</div>
        <div className="font-poppins text-[18px] ">
          {order.timeOfMakingOrder}
        </div>
        <div className="font-poppins text-[18px]">Status:</div>
        <div className="font-poppins text-[18px]">{order.status}</div>
      </div>
      <div>
        <RegularButton
          onClick={() => cancelOrder(order.id)}
          disabled={
            order.status === "IN_DELIVERY" ||
            order.status === "DELIVERED" ||
            order.status === "CANCELLED"
              ? true
              : false
          }
          color={
            order.status === "IN_DELIVERY" ||
            order.status === "DELIVERED" ||
            order.status === "CANCELLED"
              ? "disabled"
              : "red"
          }
        >
          Cancel
        </RegularButton>
      </div>
    </div>
  );
};
