import Image from "next/image";
import React from "react";
import { useOrderContext } from "@/context/cartContext";

const CounterButton = ({ name, price, quantity }) => {
  const [orders, setOrders] = useOrderContext();

  const addNewItem = () => {
    const tempOrders = { ...orders };
    tempOrders.current.filter(
      (currentOrder) => (currentOrder.quantity = +currentOrder.quantity + 1)
    );
    setOrders(tempOrders);
  };

  const removeItem = () => {
    const tempOrders = { ...orders };
    tempOrders.current.filter(
      (currentOrder) => (currentOrder.quantity = +currentOrder.quantity - 1)
    );
    setOrders(tempOrders);
  };

  return (
    <div className="flex items-center text-tst-scndry font-bold buttonShadow px-2 py-1 text-sm rounded-2lg">
      <button onClick={addNewItem} className="iconShadow p-1 mr-1 rounded-full">
        <Image src={"/plus.svg"} width={7} height={10} alt="Add" />
      </button>
      <span className="mx-1">{quantity}</span>
      <button onClick={removeItem} className="iconShadow p-1 rounded-full">
        <Image src={"/minus.svg"} width={7} height={10} alt="Remove" />
      </button>
    </div>
  );
};

export default CounterButton;
