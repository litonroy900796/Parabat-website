import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
export default function ShopingCard({
  price,
  image,
  quantity,
  name,
  removeItem,
  increaseItem,
  decreaseItem,
}) {
  return (
    <div className="">
      <div className="shadow-lg flex z-20 bg-slate-50 space-x-3 p-2 rounded-md">
        <img className="w-20 h-12 rounded-md " src={image} alt="" />

        <div>
          <div className="flex justify-between">
            <span className="text-sm font-semibold text-left">{name}</span>
            <AiFillCloseCircle
              color="#E88500"
              className=""
              onClick={removeItem}
            />
          </div>
          <div className="flex w-full justify-between space-x-7">
            <div className="w-[5rem]">
              <span>${price}</span>
            </div>
            <div>
              <h2>
                <button
                  onClick={decreaseItem}
                  className="bg-[#90624D] cursor-pointer text-white text-center text-md px-2 rounded-sm "
                >
                  -
                </button>{" "}
                {quantity}{" "}
                <button
                  onClick={increaseItem}
                  className="bg-[#90624D] text-white cursor-pointer rounded-sm text-center text-md px-2"
                >
                  +
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
