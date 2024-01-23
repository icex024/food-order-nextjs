export interface FoodInterface {
  allergens: AllergenDto[];
  foods: { [key in string]: FoodDto[] };
  restaurant: RestaurantDto;
  restaurantId: string;
  ingredients: IngredientDto[];
}

export interface AllergenDto {
  id: string;
  name: string;
}

export interface FoodDto {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  estimatedTime: number;
  foodType: string;
  meatFree: boolean;
  price: number;
  menuId: string;
  image: any;
}

export interface RestaurantDto {
  id: string;
  name: string;
  description: string;
  menuIds: string[];
  streetName: string;
  streetNumber: string;
  city: string;
  country: string;
  managerIds: string[];
  driverIds: string[];
  workTimeStart: string;
  workTimeEnd: string;
  loyaltyDefinitionIds: string[];
  latitude: number;
  longitude: number;
  image: any;
}

export interface IngredientDto {
  id: string;
  name: string;
  allergensId: string[];
}
