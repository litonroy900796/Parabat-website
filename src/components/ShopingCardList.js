import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  increaseItem,
  removeItem,
  selectItem,
  totalItem,
  totalPrice,
} from "../Redux/Slice/AddcartSlice";
import ShopingCard from "./ShopingCard";
function ShopingCardList({ click }) {
  const productdata = useSelector(selectItem);
  const totalprice = useSelector(totalPrice);
  const totalItems = useSelector(totalItem);
  const dispatch = useDispatch();

  function increaseItemQuantity(id) {
    dispatch(increaseItem(id));
  }
  function decreaseItemQuantity(id) {
    dispatch(decreaseItem(id));
  }

  return (
    <div className="w-full fixed flex  inset-0 h-screen z-100">
      <div onClick={click} className="w-8/12"></div>
      <div className="shadow-md transition delay-700 ease-in-out absolute z-40 p-3 h-screen right-0 w-[20rem] bg-gray-200 rounded-sm">
        <div className="text-cente flex justify-center align-center	">
          <span className="text-center text-2xl m-auto">
            Total Items:{totalItems}
          </span>
          <MdOutlineClear
            size="30"
            className="cursor-pointer"
            onClick={click}
          />
        </div>
        <div className=" h-[80vh]">
          <Scrollbars>
            <div className="space-y-2 mt-6">
              {productdata.map((item) => (
                <ShopingCard
                  key={item.id}
                  {...item}
                  removeItem={() => dispatch(removeItem(item.id))}
                  increaseItem={() => increaseItemQuantity(item.id)}
                  decreaseItem={() => decreaseItemQuantity(item.id)}
                />
              ))}
            </div>
          </Scrollbars>
        </div>
        <div className="text-center space-y-2 m-auto">
          <h1 className="text-xl font-semibold">Total Price:{totalprice}</h1>
          <button className="bg-[#F87171] p-2 px-5 rounded-sm text-white">
            CheakOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShopingCardList;
