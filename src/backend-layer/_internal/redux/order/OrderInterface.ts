import { RestaurantDto } from "../food-ui/FoodInterface";

export interface OrderInterface {
  craeteOrder: CreateOrderDto;
  createOrderResponse: string;
  viewOrders: ViewOrderDto[];
  viewCustomerOrdersInitialFetchStatus:
    | "FETCHED"
    | "NOTFETCHED"
    | "PENDING"
    | "REJECTED";
  viewOrdersHistory: ViewOrderDto[];
  viewCustomerOrdersHistoryFetchStatus:
    | "FETCHED"
    | "NOTFETCHED"
    | "PENDING"
    | "REJECTED";
}

export interface CreateOrderDto {
  userId: string;
  foodIds: string[];
  price: number;
  note: string;
  paymentType: "CASH" | "ONLINE";
}

export interface ViewOrderDto {
  id: string;
  customerId: string;
  restaurantId: string;
  foodIds: string[];
  price: number;
  note: string;
  paymentType: string;
  timeOfMakingOrder: string;
  estimatedTime: number;
  status: string;
  delivererId: string;
  restaurantName: string;
}
