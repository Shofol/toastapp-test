import React, { useState, useEffect } from "react";

import Image from "next/image";
import { useOrderContext } from "@/context/cartContext";
import CounterButton from "@/components/CounterButton";

const AddButton = ({ name, price }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(null);

  const [orders, setOrders] = useOrderContext();

  const addNewItem = () => {
    const currentOreder = [
      ...orders.current,
      { name: name, price: price, quantity: 1 },
    ];
    setOrders({ current: currentOreder, previous: orders.previous });
    setIsAdded(true);
  };

  useEffect(() => {
    const order = orders.current.filter((order) => order.name === name);
    if (order.length > 0) {
      setIsAdded(true);
      setQuantity(order[0].quantity);
    }
  }, [orders, name]);

  return (
    <>
      {!isAdded && (
        <button
          onClick={addNewItem}
          className="flex items-center text-tst-scndry font-bold buttonShadow px-2 py-1 text-sm rounded-2lg"
        >
          <div className="iconShadow p-1 mr-1 rounded-full">
            <Image src={"/plus.svg"} width={7} height={10} alt="Add" />
          </div>
          ADD
        </button>
      )}

      {isAdded && (
        <CounterButton name={name} price={price} quantity={quantity} />
      )}
    </>
  );
};

export default AddButton;
