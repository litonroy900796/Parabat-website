import React from "react";

export default function CustomarCard({ icon, desc, name, country, img }) {
  return (
    <div className="w-[90.5%] h-[45vh] mt-10 mb-10  border-2 p-6 shadow-xl shadow-gray-400 rounded-md">
      <div>
        <span className="shadow-sm shadow-red-100 text-2xl">{icon}</span>
        <p className="text-xs text-gray-500 mt-6">{desc}</p>
      </div>
      <div className="flex mt-14 space-x-4 align-center text-left">
        <img
          className="w-10 h-10 bg-[#D8D8D8] rounded-[50px] object-cover "
          src={img}
          alt=""
        />
        <div>
          <span className="font-bold ">{name}</span>
          <p className="text-xs text-gray-500">{country}</p>
        </div>
      </div>
    </div>
  );
}
