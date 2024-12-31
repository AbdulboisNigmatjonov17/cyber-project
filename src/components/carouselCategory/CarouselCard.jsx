import React from "react";
import { Data } from "./CategoryCardData";

const CarouselCard = () => {
  return (
    <>
      {Data.map((item) => (
        <div
          className="caruselCard w-[160px] bg-[#EDEDED] p-5 flex flex-col items-center justify-center text-center"
          key={item.id}
        >
          <img src={item.img} alt={item.title} className="mb-2" />
          <h3 className="font-medium text-lg">{item.title}</h3>
        </div>
      ))}
    </>
  );
};

export default CarouselCard;
