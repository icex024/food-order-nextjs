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

export const fetchOrdersForDeliverer = (delivererId: string) => {
  return getAxios().get(
    "/order/get-orders-for-deliverer-initial?delivererId=" + delivererId,
    { data: {} }
  );
};

export const fetchOrdersForDelivererTaken = (delivererId: string) => {
  return getAxios().get(
    "/order/get-orders-for-deliverer-taken?delivererId=" + delivererId,
    { data: {} }
  );
};

export const fetchOrdersForDelivererInDelivery = (delivererId: string) => {
  return getAxios().get(
    "/order/get-orders-for-deliverer-in-delivery?delivererId=" + delivererId,
    { data: {} }
  );
};

export const fetchOrdersForDelivererHistory = (delivererId: string) => {
  return getAxios().get(
    "/order/get-orders-for-deliverer-history?delivererId=" + delivererId,
    { data: {} }
  );
};

export const fetchAvailableDeliverSlots = (delivererId: string) => {
  return getAxios().get(
    "/user/get-available-slots?delivererId=" + delivererId,
    { data: {} }
  );
};

export interface StartDeliveryDto {
  delivererId: string;
  orderIds: string[];
}

export const startDeliveries = (dto: StartDeliveryDto) => {
  return getAxios().post("/order/start-all-deliveries", dto);
};

export const finishDelivery = (orderId: string) => {
  return getAxios().post("/order/finish-delivery?orderId=" + orderId, {
    data: {},
  });
};

export interface DelivererCancelOrderDto {
  orderId: string;
  delivererId: string;
}

export const cancelDeliveryDeliverer = (dto: DelivererCancelOrderDto) => {
  return getAxios().patch("/order/cancel-order-for-deliverer", dto);
};

export interface DelivererTakeOrderDto {
  orderId: string;
  delivererId: string;
}

export const takeOrder = (dto: DelivererTakeOrderDto) => {
  return getAxios().patch("/order/take-order", dto);
};
