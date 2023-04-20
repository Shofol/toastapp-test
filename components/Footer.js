import React from "react";
import Image from "next/image";
import { useOrderContext } from "@/context/cartContext";
import Link from "next/link";

const Footer = () => {
  const [orders, setOrders] = useOrderContext();

  return (
    <div className="fixed max-w-md mx-auto px-2 py-4 bottom-0 left-0 right-0 w-full bg-tst-gray-bg flex justify-between">
      <div className="flex-1 flex justify-center">
        <button className="lightIconShadow px-3 py-2 rounded-2lg">
          <Image src={"/light.svg"} width={12} height={12} alt="light" />
        </button>
      </div>
      <div className="flex-1 flex justify-center">
        <button className="bookIconShadow p-2 rounded-2lg">
          <Image src={"/book.svg"} width={20} height={20} alt="bookmark" />
        </button>
      </div>

      <div className="flex-1 flex justify-center">
        <Link href="/cart" className="cartIconShadow p-2 rounded-2lg relative">
          {orders.current.length > 0 && (
            <div className="absolute -right-2 font-poppins -top-2 bg-red-500 text-white text-xs rounded-full font-bold w-5 h-5 flex justify-center items-center">
              {orders.current.length}
            </div>
          )}
          <Image src={"/cart.svg"} width={20} height={20} alt="Add" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
