import React from "react";
import tableimage from "../image/table.png";
import Selinformation from "./Selinformation";
export default function CofiSection() {
  return (
    <div className="bg-[#F6F6F6] flex sm:flex-row flex-col text-center sm:text-left sm:justify-between pb-[3rem] pt-10 mb-4 md:px-20 px-5 sm:px-10">
      <div className="text-center md:w-5/6 sm:w-3/6 h-auto ">
        <img
          className="md:w-5/6 sm:w-5/6 md:ml-10 sm:ml-6 ml-3 "
          src={tableimage}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="w-5/6 sm:ml-0 ml-10">
        <Selinformation
          header="The Shelving System"
          dec="Probably the world most modular shelving system . when it comes to modularity ,the limit does not exist. Start with one self and expansion units and add-ons to build a selving system that works perfectly in your space - either now or in the future "
          btntitle="Shop Now"
          Btnposition="sm:left-0 left-[34%]"
        />
      </div>
    </div>
  );
}
