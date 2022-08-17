import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
export default function futter() {
  return (
    <div className="bg-[#484543] text-white md:pl-20 px-5 sm:pl-10 pt-10 pb-10">
      <div className="flex  md:flex-row flex-col justify-between mb-10">
        <div className="">
          <h1 className="text-2xl font-bold mb-5">Parabot</h1>
          <address className="text-md mb-[4rem]">
            625 E Franklin Ave ,Minneapolis,Min 55404,USA
          </address>
          <span className="text-sm">&copy; Parabot.All rights reserved</span>
        </div>
        <div className="">
          <h1 className="text-md font-normal mb-5">About us </h1>
          <span className="block text-sm mb-5">Our story</span>
          <span className="block text-sm mb-5">Designer</span>
          <span className="block text-sm mb-5">Craftsmanship</span>
          <span className="block text-sm ">Sustainabilty</span>
        </div>
        <div className="">
          <h1 className="text-md font-normal mb-5">Support</h1>
          <span className="mb-5 block text-sm">FAQ'S</span>
          <span className="mb-5 block text-sm">Shipping & Returns</span>
          <span className=" block text-sm mb-5">Care guide</span>
          <span className=" block text-sm">Warranty</span>
        </div>
        <div className="">
          <h1 className="text-md font-normal mb-5">Contacts</h1>
          <span className="block mb-5 text-sm">+2 666.272.2147</span>
          <span className="block mb-5 text-sm">hello@parabotku.com</span>
          <div className="flex space-x-4">
            <ImFacebook />
            <FaInstagram />
            <AiOutlineTwitter />
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl">Build By ❤Liton Roy❤</h1>
    </div>
  );
}
