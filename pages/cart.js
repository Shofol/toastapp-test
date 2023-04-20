import React from "react";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import { useOrderContext } from "@/context/cartContext";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import { useRouter } from "next/router";

const Cart = () => {
  const [orders, setOrders] = useOrderContext();

  const currentOrders = orders.current;
  const prevOrders = orders.previous;

  const router = useRouter();

  const placeOrder = () => {
    setOrders({ current: [], previous: [...prevOrders, ...currentOrders] });
    router.push("/");
  };

  return (
    <main className="max-w-md mx-auto bg-tst-light-bg min-h-screen max-h-screen overflow-y-scroll">
      <div className="bg-tst-bg flex justify-between items-center rounded-br-2lg rounded-bl-2lg cartNavbarShadow p-4">
        <Link href="/" className="p-2 rounded-2lg cartIconButtonShadow">
          <Image src={"/arrow-left.svg"} width={20} height={20} alt="back" />
        </Link>
        <h1 className="flex-1 ml-4 font-graphik text-lg font-semibold text-tst-scndry">
          Place Order
        </h1>
        <button className="p-2 rounded-2lg cartIconButtonShadow">
          <Image src={"/icon-waiter.svg"} width={20} height={20} alt="back" />
        </button>
      </div>
      <div className="p-2">
        <Accordion menuName="Current Order">
          <div className="cartShadow rounded-2lg">
            {currentOrders.map((order) => {
              return (
                <CartItem key={order.name} order={order} isCurrent={true} />
              );
            })}
          </div>
        </Accordion>
      </div>
      <div className="p-2">
        <Accordion menuName="Previous Orders">
          <div className="cartShadow rounded-2lg">
            {prevOrders.map((order) => {
              return <CartItem key={order.name} order={order} />;
            })}
          </div>
        </Accordion>
      </div>

      <button
        className="max-w-md mx-auto fixed bottom-2 w-full px-2 text-white font-bold"
        onClick={placeOrder}
      >
        <div className="mx-1 flex justify-between items-center orderButton px-4 py-2 rounded-2lg">
          <p>{currentOrders.length} item(s)</p>
          <div className="flex items-center">
            <p className="mr-2">PLACE ORDER</p>
            <div className="orderButtonIcon rounded-full w-10 h-10 flex items-center justify-center">
              <Image
                src={"/arrow-right.svg"}
                width={16}
                height={16}
                alt="place order"
              />
            </div>
          </div>
        </div>
      </button>
    </main>
  );
};

export default Cart;
