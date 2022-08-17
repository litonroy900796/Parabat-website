import React from "react";
import { BsCartPlusFill, BsFillCartCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Product({
  id,
  image,
  name,
  company,
  price,
  onclick,
  exist,
}) {
  const Navigate = useNavigate();
  function onchangeNavigate(e) {
    e.preventDefault();
    e.stopPropagation();
    Navigate(`products/${id}`);
  }
  return (
    <div
      onClick={onchangeNavigate}
      className="lg:w-3/12 md:w-4/12 sm:w-6/12 w-full relative mb-6"
    >
      <div className="mx-4 bg-[#faf6f4] rounded-lg overflow-hidden cursor-pointer pb-2">
        <img className="w-full h-[12rem] object-cover" src={image} alt="img" />
        <div className="px-2">
          <span className="capitalize  text-sm">{company}</span>
          <h1 className="capitalize text-md font-medium">{name}</h1>
          <div className="flex justify-between text-center align-middle">
            <span>৳{price}</span>
            {exist(id) ? (
              <span className="bg-gray-400 p-2 text-white rounded-3xl">
                <BsFillCartCheckFill />
              </span>
            ) : (
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onclick();
                }}
                className="bg-red-400 p-2 text-white rounded-3xl"
              >
                <BsCartPlusFill />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
