import React, { useState } from "react";
import Image from "next/image";

const Accordion = ({ menuName, children }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="p-2 cursor-pointer">
      <div
        className="flex items-center"
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="font-graphik text-tst-scndry font-semibold py-3">
          {menuName}
        </div>
        <div className="bg-tst-scndry h-px mx-2 opacity-20 flex-1"></div>
        <div>
          <Image
            src="/arrow.svg"
            width={7}
            height={10}
            alt="Control"
            className={"duration-300 " + (isActive ? "" : "rotate-180")}
          />
        </div>
      </div>
      {isActive && <div>{children}</div>}
    </div>
  );
};

export default Accordion;
