import React from "react";
import Car from "../image/car.png";
import box from "../image/download.png";
import material from "../image/material.png";
import HeroSlidrCard from "./HeroSliderCard";

export default function HeroSlider() {
  return (
    <div className="flex md:justify-between flex-col sm:flex-row sm:mx-2 mt-14 pb-10 md:px-20 px-5 ">
      <HeroSlidrCard
        image={Car}
        header="Fast @ Free Shipping"
        dec="Every single order ships for free.No minimums,no tiers,no print whatsoever  "
      />
      <HeroSlidrCard
        image={box}
        header="Modular, easy-to-move design"
        dec="Our innovative modilar design is drive by the belief that furniture should fit this home  "
      />
      <HeroSlidrCard
        image={material}
        header="Durable,premium materials"
        dec="Our innovative modilar design is drive by the belief that furniture should fit this home  "
      />
    </div>
  );
}
