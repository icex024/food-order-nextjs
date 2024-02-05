import { AxiosResponse } from "axios";
import { getAxios } from "../../axios-wrapper";
import { CreateOrderDto } from "./OrderInterface";

export const makeOrder = (order: CreateOrderDto) => {
  return getAxios().post("/order/create-order", order);
};

export const fetchOrdersForCustomerInitial = (customerId: string) => {
  return getAxios().get(
    "/order/get-orders-for-customer-initial?customerId=" + customerId,
    { data: {} }
  );
};

export const fetchOrderForCustomerHistory = (
  customerId: string
): Promise<AxiosResponse<any, any>> => {
  return getAxios().get(
    "/order/get-orders-for-customer-history?customerId=" + customerId,
    { data: {} }
  );
};

export const cancelOrderCutsomer = (orderId: string) => {
  return getAxios().patch("/order/cancel-order-customer?orderId=" + orderId, {
    data: {},
  });
};
