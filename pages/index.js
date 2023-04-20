import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import FoodCard from "@/components/FoodCard";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Accordion from "@/components/Accordion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const specialFoods = [
    { name: "Sunset Acai Bowl", price: "299" },
    { name: "Sunrise Acai Bowl", price: "200" },
    { name: "Acai Bowl", price: "100" },
    { name: " Bowl", price: "300" },
  ];
  return (
    <>
      <Head>
        <title>Toast App</title>
        <meta name="description" content="A food app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-md mx-auto bg-tst-light-bg min-h-screen max-h-screen overflow-y-scroll">
        <NavBar />
        <div className="mt-4 px-4">
          <div className="bg-tst-gray-bg rounded-2lg p-2 cardShadow">
            <div className="relative h-32 flex items-end">
              <div className="absolute top-0 left-0 bg-black w-full h-full z-10 opacity-30 rounded-2lg"></div>
              <p className="relative z-10 text-white font-bold p-4">
                Welcome to <br />
                Sacred Earth Cafe
              </p>
              <Image
                src={"/special.png"}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                alt="Sacred Earth Cafe"
                className="rounded-2lg"
              />
            </div>
          </div>
          <Accordion menuName="Today's Special">
            <div className="grid grid-cols-2 space-x-2 pb-16">
              {specialFoods.map((food) => {
                return (
                  <FoodCard
                    foodName={food.name}
                    price={food.price}
                    key={food.name}
                  />
                );
              })}
            </div>
          </Accordion>
        </div>

        <Footer />
      </main>
    </>
  );
}
