import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SmallFoodCard from "@/components/SmallFoodCard";
import Accordion from "@/components/Accordion";

const HomeMenu = () => {
  const menuFoods = {
    test1: [
      { name: "Sunset Acai Bowl 1", price: "299" },
      { name: "Sunrise Acai Bowl 1", price: "200" },
      { name: "Acai Bowl 1", price: "100" },
      { name: "1 Bowl", price: "300" },
    ],
    test2: [
      { name: "Acai Bowl 2", price: "299" },
      { name: "Sunrise Acai Bowl 2", price: "200" },
      { name: "Acai Bowl 22", price: "100" },
      { name: "2 Bowl", price: "300" },
    ],
  };

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
          <div className="pb-16">
            <Accordion menuName="Test Menu">
              {menuFoods.test1.map((food) => {
                return (
                  <SmallFoodCard
                    foodName={food.name}
                    price={food.price}
                    key={food.name}
                  />
                );
              })}
            </Accordion>

            <Accordion menuName="Test Menu 2">
              {menuFoods.test2.map((food) => {
                return (
                  <SmallFoodCard
                    foodName={food.name}
                    price={food.price}
                    key={food.name}
                  />
                );
              })}
            </Accordion>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default HomeMenu;
