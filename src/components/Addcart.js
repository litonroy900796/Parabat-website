import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { totalItem } from "../Redux/Slice/AddcartSlice";
export default function Addcart({ click }) {
  const totalItems = useSelector(totalItem);
  return (
    <div
      onClick={click}
      className="sticky h-[4rem] w-[3rem] bg-[#DFC4AF] text-center left-[78.5rem] bottom-[5%]"
    >
      <div className=" p-2 relative space-y-4">
        <div className="bg-white w-6 rounded-[50%] absolute top-1 right-1">
          <span className=" ">{totalItems}</span>
        </div>

        <TiShoppingCart size="40" className="ml-[-0.5rem]" />
      </div>
    </div>
  );
}
