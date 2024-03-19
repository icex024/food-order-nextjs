import { NavbarAdmin } from "@/components/admin-panel";
import {
  NewRestaurantProvider,
  useCrateRestaurantContext,
  useSetCityNewRestaurant,
  useSetCountryNewRestaurant,
  useSetDescriptionNewRestaurant,
  useSetImageNewRestaurant,
  useSetNameNewRestaurant,
  useSetStreetNameNewRestaurant,
  useSetStreetNumberNewRestaurant,
  useSetWorkTimeEndNewRestaurant,
  useSetWorkTimeStartNewRestaurant,
} from "@/components/admin-panel/new-restaurant";
import { RegularButton } from "@/components/buttons";
import { RegularTextInput } from "@/components/inputs";
import { PanelContainer } from "@/components/sections";
import { NextPage } from "next";
import { useRouter } from "next/router";
import TimePicker from "react-time-picker";

const NewRestaurant: NextPage = () => {
  return (
    <>
      <NavbarAdmin />
      <div className="bg-primary">
        <PanelContainer className="flex">
          <NewRestaurantProvider>
            <Component />
          </NewRestaurantProvider>
        </PanelContainer>
      </div>
    </>
  );
};

const Component = () => {
  const [city, setCity] = useSetCityNewRestaurant();
  const [country, setCountry] = useSetCountryNewRestaurant();
  const [description, setDescription] = useSetDescriptionNewRestaurant();
  const setImage = useSetImageNewRestaurant();
  const [name, setName] = useSetNameNewRestaurant();
  const [streetName, setStreetName] = useSetStreetNameNewRestaurant();
  const [streetNumber, setStreetNumber] = useSetStreetNumberNewRestaurant();
  const [workTimeStart, setWorkTimeStart] = useSetWorkTimeStartNewRestaurant();
  const [workTimeEnd, setWorkTimeEnd] = useSetWorkTimeEndNewRestaurant();
  const router = useRouter();
  const create = useCrateRestaurantContext();
  return (
    <div className="flex flex-col gap-2 max-w-[512px] w-full mx-auto bg-white p-4 place-self-center rounded-lg shadow-lg">
      <div>
        <div className="text-[18px] font-poppins mb-2">Name:</div>
        <RegularTextInput setState={setName} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Description:</div>
        <RegularTextInput setState={setDescription} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Country:</div>
        <RegularTextInput setState={setCountry} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">City:</div>
        <RegularTextInput setState={setCity} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Street name:</div>
        <RegularTextInput setState={setStreetName} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Street number:</div>
        <RegularTextInput setState={setStreetNumber} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Start time:</div>
        {/* <TimePicker
          onChange={(value) =>
            setWorkTimeStart(
              typeof value?.valueOf() === "undefined" ? "" : value.valueOf()
            )
          }
        /> */}
        <RegularTextInput setState={setWorkTimeStart} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">End time:</div>
        {/* <div className="w-full">
          <TimePicker
            size={512}
            onChange={(value) =>
              setWorkTimeEnd(
                typeof value?.valueOf() === "undefined" ? "" : value.valueOf()
              )
            } //ovo proveri prika obavvezno
          />
        </div> */}
        <RegularTextInput setState={setWorkTimeEnd} />
      </div>
      <div>
        <div className="text-[18px] font-poppins mb-2">Image:</div>
        <input
          type="file"
          onChange={(e) => {
            if (e.target.files !== null) {
              setImage(e.target.files[0]);
            }
          }}
        />
      </div>
      <div className="flex gap-2 mt-2">
        <RegularButton
          onClick={() => router.push("/admin-panel")}
          color="white"
        >
          Go back
        </RegularButton>

        <RegularButton
          onClick={() => {
            create();
            router.push("/admin-panel");
          }}
          color="primary-fourth"
        >
          Create
        </RegularButton>
      </div>
    </div>
  );
};

export default NewRestaurant;
