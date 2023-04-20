import React from "react";
import Image from "next/image";
import AddButton from "./AddButton";

const SmallFoodCard = ({ foodName, price }) => {
  return (
    <div className="smallFoodCardShadow bg-tst-card-bg rounded-2lg mb-4 flex p-2">
      <div className="relative w-20 h-20">
        <Image
          src={"/food.png"}
          fill
          style={{ objectFit: "cover" }}
          alt="Sacred Earth Cafe"
          className="rounded-2lg"
        />
      </div>
      <div className="px-2 flex flex-col flex-1">
        <p className="text-tst-scndry font-bold ">{foodName}</p>

        <div className="flex items-end justify-between pb-2 flex-1">
          <div className="text-tst-scndry font-bold pt-1 text-sm flex items-center">
            <span className="pr-1">
              <Image src={"/greenIcon.svg"} width={16} height={16} alt="Add" />
            </span>
            <span>₹ {price}</span>
          </div>
          <AddButton name={foodName} price={price} />
        </div>
      </div>
    </div>
  );
};

export default SmallFoodCard;
