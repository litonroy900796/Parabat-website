import React from "react";
import girl from "../image/garl.jpg";
import littleImg from "../image/litile.jpg";
import Selinformation from "./Selinformation";
export default function DreamSection() {
  return (
    <div className="flex sm:flex-row flex-col justify-between  pb-[7rem]  bg-[#FFFFFF] pt-10 sm:mx-2 md:px-20 px-5 sm:px-10">
      <div className="sm:w-[55%] w-[75%] sm:text-left text-center sm:mt-[6rem] mt-0">
        <img className="w-fit p-4 rounded-sm sm:ml-0 ml-20" src={girl} alt="" />
      </div>
      <div className="sm:w-[42%] w-[100%] sm:text-left text-center">
        <div className="sm:w-[100%] sm:ml-0 ml-10 ">
          <Selinformation
            header="Discover the interior design ofyour dreams"
            dec="From mixing and matching woods to understanding which coffee tables are best for different types of sectional ,styling a room is an art"
            btntitle="Get inspired"
            Btnposition="sm:left-0 left-[34%]"
          />
        </div>
        <div className="mt-[7rem] sm:w-[85%]   w-[70%]  sm:ml-12 ml-20 ">
          <img className="rounded-sm  " src={littleImg} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
