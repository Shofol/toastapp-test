import React from "react";
import Image from "next/image";
import AddButton from "./AddButton";

const FoodCard = ({ foodName, price }) => {
  return (
    <div className="foodCardShadow bg-tst-card-bg rounded-2lg mb-4">
      <div className="relative h-36">
        <Image
          src={"/food.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="Sacred Earth Cafe"
          className="rounded-tr-2lg rounded-tl-2lg"
        />
      </div>
      <div className="px-2">
        <div className="text-tst-scndry font-bold pt-1 text-sm flex items-center">
          <span className="pr-1">
            <Image src={"/greenIcon.svg"} width={16} height={16} alt="Add" />
          </span>
          <span>{foodName}</span>
        </div>
        <div className="flex items-center justify-between pb-2 pt-1">
          <p className="text-tst-scndry font-bold text-sm">₹ {price}</p>
          <AddButton name={foodName} price={price} />
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
