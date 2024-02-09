export interface LoyaltyInterface {
  loyaltyDefinitions: LoyaltyDefinitionDto[];
  loyaltyDefinitionsFetchStatus:
    | "FETCHED"
    | "NOTFETCHED"
    | "PENDING"
    | "REJECTED";
  drinks: DrinkDto[];
  fetchDrinksStatus: "FETCHED" | "NOTFETCHED" | "PENDING" | "REJECTED";
}

export interface LoyaltyDefinitionDto {
  id: string;
  restaurantId: string;
  threshold: number;
  reset: boolean;
  type: string;
  discountInPercentage: number;
  freeDrinkName: string;
  freeDrinkId: string;
}

export interface DrinkDto {
  id: string;
  name: string;
}
