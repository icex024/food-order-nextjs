import {
  useChangeMenu,
  useFetchFoodsByMenuId,
  useFetchMenusForManager,
  useFoodsForMenu,
  useGetIngredients,
  useMenus,
  useOtherMenus,
  useRemoveFoodFromMenu,
  useRemoveMenu,
  useUpdateFoodPrice,
} from "@/backend-layer/food-ui";
import { NavbarManager } from "@/components/manager-panel/navbar";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ArrowRight from "../../../public/images/arrow-right.svg";
import { useAddUnitsToCart } from "@/backend-layer/order";
import {
  FoodDto,
  MenuDto,
} from "@/backend-layer/_internal/redux/food-ui/FoodInterface";
import NoImage from "../../../public/images/no-image.png";
import { NumberInput } from "@/components/inputs";
import { RegularButton } from "@/components/buttons";
import { useRouter } from "next/router";

const MenuManagement: NextPage = () => {
  useFetchMenusForManager();
  const menus = useMenus();
  console.log(menus);
  const router = useRouter();
  return (
    <>
      <NavbarManager />
      <div className="bg-primary relative">
        <PanelContainer>
          <div className=" py-2">
            {menus.map((menu, i) => (
              <MenuItem key={i} menuId={menu.id}>
                {menu.name}
              </MenuItem>
            ))}
          </div>
        </PanelContainer>
        <div className="absolute bottom-[80px] right-5 h-20">
          <RegularButton
            onClick={() => router.push("/menu-management/new-menu")}
            color="primary-fourth"
            className="p-4"
          >
            Make new menu
          </RegularButton>
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
  const removeMenu = useRemoveMenu();
  const router = useRouter();
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
      <motion.div initial={false} animate={{ opacity: isClicked ? 100 : 0 }}>
        <div className="grid grid-cols-8 w-full gap-4 ">
          {isClicked &&
            foods &&
            foods.map((food, i) => <FoodItem key={i} food={food} />)}
        </div>

        {isClicked && (
          <div className="flex gap-2 my-4">
            {" "}
            <div className="max-w-[256px] w-full">
              <RegularButton
                disabled
                onClick={() => removeMenu(menuId)}
                color="red"
              >
                Remove menu
              </RegularButton>
            </div>
            <div className=" max-w-[256px] w-full">
              <RegularButton
                onClick={() =>
                  router.push("/menu-management/new-item?menuId=" + menuId)
                }
                color="primary-fourth"
              >
                Add item
              </RegularButton>
            </div>
          </div>
        )}
      </motion.div>
    </>
  );
};

const FoodItem: FC<{ food: FoodDto }> = ({ food }) => {
  const ingredients = useGetIngredients(food.ingredients);
  const removeFood = useRemoveFoodFromMenu();
  const [newPrice, setNewPrice] = useState(food.price);
  const [showPriceInput, isShowPriceInput] = useState(false);
  const updatePrice = useUpdateFoodPrice();
  const [menus, setMenus] = useState<MenuDto[]>([]);
  const otherMenus = useOtherMenus();
  const [showMenus, isShowMenus] = useState(false);
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
          <div className="p-2">{food.price}RSD</div>
        </div>
      </div>
      <div className="px-2 pb-2">
        <div className="flex flex-col gap-1">
          <RegularButton
            onClick={() => removeFood(food.id, food.menuId)}
            color="red"
          >
            Remove
          </RegularButton>
          <RegularButton
            onClick={() => {
              if (showPriceInput) {
                isShowPriceInput(false);
                if (newPrice !== food.price) {
                  updatePrice(food.id, newPrice, food.menuId);
                }
              } else {
                isShowPriceInput(true);
              }
            }}
            color="primary-fourth"
          >
            Update price
          </RegularButton>
          {showPriceInput && (
            <NumberInput
              value={newPrice}
              setState={setNewPrice}
              min="1"
              className="my-1"
            />
          )}
          <RegularButton
            onClick={() => {
              if (showMenus) {
                isShowMenus(false);
              } else {
                setMenus(otherMenus(food.menuId));
                isShowMenus(true);
              }
            }}
            color="white"
          >
            Move
          </RegularButton>
          {showMenus && (
            <div className="">
              {menus.map((menu, i) => (
                <SmallMenuItem
                  menu={menu}
                  isShowMenus={isShowMenus}
                  oldMenuId={food.menuId}
                  foodId={food.id}
                  key={i}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SmallMenuItem: FC<{
  menu: MenuDto;
  isShowMenus: Dispatch<SetStateAction<boolean>>;
  oldMenuId: string;
  foodId: string;
}> = ({ menu, isShowMenus, oldMenuId, foodId }) => {
  const changeMenu = useChangeMenu();
  return (
    <div
      onClick={() => {
        changeMenu(foodId, oldMenuId, menu.id);
        isShowMenus(false);
      }}
      className="hover:bg-primary-third pl-1 py-1"
    >
      {menu.name}
    </div>
  );
};

export default MenuManagement;
