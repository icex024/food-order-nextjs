import { RegularButton } from "@/components/buttons";
import { NextPage } from "next";
import { easeIn, motion } from "framer-motion";
import { SectionContainer } from "@/components/sections";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center h-screen bg-no-repeat bg-center bg-cover bg-[url('/images/main-page.jpg')]">
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0.0 }}
          animate={{ opacity: 1.0 }}
          transition={{ delay: 1.3, duration: 1.5 }}
          className="max-w-[400px] w-full py-6 px-4 bg-primary bg-opacity-45"
        >
          <div className="text-black font-bold text-7xl font-poppins mb-2">
            FOODIE
          </div>
          <div className="text-black font-normal text-xl font-poppins mb-2">
            Order food quick and easy!
          </div>
          <div className="flex">
            <RegularButton
              onClick={() => router.push("/sign-up")}
              className="mr-2"
              color="white"
            >
              Make account
            </RegularButton>
            <RegularButton
              onClick={() => router.push("/login")}
              color="primary-fourth"
            >
              Your panel
            </RegularButton>
          </div>
        </motion.div>
      </SectionContainer>
    </div>
  );
};

export default Home;
