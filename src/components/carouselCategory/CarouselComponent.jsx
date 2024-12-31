import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Data } from "./CategoryCardData";

const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="bg-[#FAFAFA] py-20">
      <div className="Container w-full">
        <h2 className="font-medium text-2xl leading-[32px] mb-10">
          Browse By Category
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          className="cursor-grab"
        >
          {
            Data.map((item) => (
              <div
                className="caruselCard w-[160px] h-[130px] bg-[#EDEDED] py-6 px-[52px] rounded-[15px] flex flex-col items-center justify-center text-center gap-2"
                key={item.id}
              >
                <img src={item.img} alt={item.title} />
                <h3 className="font-medium text-[16px] leading-[24px]">{item.title}</h3>
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
