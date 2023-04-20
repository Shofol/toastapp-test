import React from "react";
import Image from "next/image";
import CounterButton from "./CounterButton";

const CartItem = ({ order, isCurrent }) => {
  return (
    <div className="mb-4 flex p-2 pl-4 pr-8 items-center">
      <span className="pr-1">
        <Image src={"/greenIcon.svg"} width={16} height={16} alt="Add" />
      </span>
      <div className="px-2 flex flex-col flex-1">
        <p className="text-tst-scndry font-bold ">{order.name}</p>
        <div className="text-tst-scndry font-bold pt-1 text-sm flex items-center">
          <span>₹ {order.price}</span>
        </div>
      </div>
      {isCurrent && <CounterButton quantity={order.quantity} />}

      {!isCurrent && (
        <span className="font-bold text-tst-scndry">{order.quantity}</span>
      )}
    </div>
  );
};

export default CartItem;
