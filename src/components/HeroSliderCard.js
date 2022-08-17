import React from "react";

export default function HeroSliderCard({ image, header, dec }) {
  return (
    <div className=" w-50 sm:mb-0 mb-4 sm:border-b-0 border-b-2 border-black  flex md:justify-around md:flex-row items-center text-center flex-col md:space-x-4 space-x-2 md:mr-1 mr-8">
      <img
        className="bg-gray-200 p-2 rounded-[50px] md:w-12 w-20 m-2 object-cover"
        src={image}
        alt="imag"
      />
      <div>
        <h2 className="font-bold sm:text-sm text-lg">{header}</h2>
        <p className="sm:w-40 w-60 sm:text-xs text-base leading-5 text-gray-600 sm:mb-0 mb-3">
          {dec}
        </p>
      </div>
    </div>
  );
}
