import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AvaterImage from "../image/avater.png";
import girl from "../image/girl.png";
import man from "../image/man.png";
import CustomarCard from "./CustomarCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 2000, min: 950 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 640 },
    items: 1,
  },
  res: {
    breakpoint: { max: 950, min: 700 },
    items: 1,
  },

  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function CustomarList() {
  return (
    <div className="bg-[#F6F6F6] pt-10  md:px-20 px-5 sm:px-10 pb-10">
      <div className="flex justify-between ">
        <h1 className="w-fit text-4xl font-bold">Words from our customar</h1>
        <div className="flex text-center space-x-3 align-center justify-center">
          <span className="w-8 h-8 bg-white text-gray-500 rounded-[50px]">
            <AiOutlineArrowLeft className="text-center mt-2 ml-2" />
          </span>
          <span className="w-8 h-8 bg-white text-gray-500 rounded-[50px]">
            <AiOutlineArrowRight className=" text-center mt-2 ml-2" />
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-between z-0 opacity-90">
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          responsive={responsive}
        >
          <CustomarCard
            desc="Very intentional,thoughtful and beaitifull design.Just the right amount of support and cazy "
            icon="😎"
            name="Nessi"
            country="Brookiyn,NY"
            img={man}
          />

          <CustomarCard
            desc="Very intentional,thoughtful and beaitifull design.Just the right amount of support and cazy "
            icon="😍"
            name="David"
            country="Los Angeles,CA"
            img={AvaterImage}
          />

          <CustomarCard
            desc="Watching TV would not be thesame without my noord sofa "
            icon="😘"
            name="Jenny"
            country="New York,NY"
            img={girl}
          />
        </Carousel>
      </div>
    </div>
  );
}
