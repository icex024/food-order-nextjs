import {
  useFetchAllIngredients,
  useFetchFoodsByMenuId,
  useFetchMenus,
  useFoodsForMenu,
  useGetFood,
  useGetIngredients,
  useSelectedRestaurant,
} from "@/backend-layer/food-ui";
import { srcPng } from "@/consts";
import Image from "next/image";
import ArrowRight from "../../../../public/images/arrow-right.svg";
import NoImage from "../../../../public/images/no-image.png";
import { FC, ReactNode, useState } from "react";
import { animate, motion } from "framer-motion";
import { FoodDto } from "@/backend-layer/_internal/redux/food-ui/FoodInterface";
import { RegularButton } from "@/components/buttons";
import { NumberInput } from "@/components/inputs";
import {
  useAddUnitsToCart,
  useCheckIfThereIsOrder,
} from "@/backend-layer/order";
import { useRouter } from "next/router";

export const PreviewRestaurant = () => {
  const restaurant = useSelectedRestaurant();
  const menus = useFetchMenus(restaurant.id);
  useFetchAllIngredients();
  const router = useRouter();
  const checkOrder = useCheckIfThereIsOrder();
  return (
    <>
      <div className="pt-4 flex relative">
        <div>
          {
            <Image
              src={srcPng(restaurant?.image)}
              alt=""
              height={400}
              width={400}
            />
          }
        </div>
        <div className="ml-4 flex flex-col justify-between">
          <div className="text-[64px] leading-[50px] font-poppins mb-2">
            {restaurant.name}
          </div>
          <div className="text-[24px] font-poppins ">
            {restaurant.description}
          </div>
          <div className="text-[24px] font-poppins ">
            {restaurant.streetName},{restaurant.streetNumber},{restaurant.city}
          </div>
          <div className="text-[24px]  font-poppins">
            {restaurant.workTimeStart}-{restaurant.workTimeEnd}
          </div>
        </div>
        <div className="h-[50px] w-44 absolute bottom-0 right-0">
          <RegularButton
            color="primary-fourth"
            onClick={() => {
              checkOrder();
            }}
          >
            Proceed with order
          </RegularButton>
        </div>
      </div>
      <div className="mt-8 w-full">
        <div className="text-[32px] font-poppins">Menus</div>
        <hr className="border-t-2"></hr>

        <div className=" py-2">
          {menus.map((menu, i) => (
            <MenuItem key={i} menuId={menu.id}>
              {menu.name}
            </MenuItem>
          ))}
        </div>
      </div>
    </>
  );
};

const MenuItem: FC<{ children: ReactNode; menuId: string }> = ({
  children,
  menuId,
}) => {
  const [isClicked, setClicked] = useState(false);
  useFetchFoodsByMenuId(menuId);
  const foods = useFoodsForMenu(menuId);
  return (
    <>
      <div
        onClick={() => setClicked(!isClicked)}
        className="flex w-full text-[24px] font-poppins mb-2 pl-1  hover:bg-primary-fourth hover:bg-opacity-40"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isClicked ? 90 : 0 }}
          className="flex place-items-center mr-2"
        >
          <Image src={ArrowRight} alt="Arrow" className="my-auto" />
        </motion.div>
        <div>{children}</div>
      </div>
      <motion.div
        initial={false}
        animate={{ opacity: isClicked ? 100 : 0 }}
        className="grid grid-cols-8 w-full gap-4 "
      >
        {isClicked &&
          foods &&
          foods.map((food, i) => <FoodItem key={i} food={food} />)}
      </motion.div>
    </>
  );
};

const FoodItem: FC<{ food: FoodDto }> = ({ food }) => {
  const [numberOfUnits, setNumberOfUnits] = useState(1);
  const ingredients = useGetIngredients(food.ingredients);
  const addUnitsToCart = useAddUnitsToCart();
  return (
    <div className="flex flex-col justify-between max-w-[256px] w-full rounded-xl overflow-hidden shadow-xl bg-white">
      <div>
        <Image src={NoImage} alt="nista" width={256} height={256} />

        <div className="flex flex-col justify-between ">
          <div className="p-2">{food.name}</div>
          <div className="p-2">{food.description}</div>
          <div className="p-2">{food.foodType}</div>
          <div className="p-2">
            {ingredients.map((ingredient, i) => (
              <div key={i}>{ingredient.name}</div>
            ))}
          </div>
          <div className="p-2">{food.price}</div>
        </div>
      </div>
      <div className="px-2 pb-2">
        <div className="mb-2">
          <NumberInput value={numberOfUnits} setState={setNumberOfUnits} />
        </div>
        <div>
          <RegularButton
            color="primary-fourth"
            onClick={() => addUnitsToCart(food.id, numberOfUnits)}
          >
            Add to cart
          </RegularButton>
        </div>
      </div>
    </div>
  );
};
