import React from "react";
import Button from "./Button";
export default function Communication() {
  return (
    <div className="md:pl-20 px-5 sm:pl-10 sm:text-center text-left w-8/12 m-auto pt-[7rem] pb-20">
      <h1 className="font-same text-4xl mb-4">
        Joion our newsletter for $10 off
      </h1>
      <p className="text-gray-500 text-sm mb-10 tracking-wider">
        <span className="block ">
          We'll email you a Voucher worth $10 off your first order over $50
        </span>
        .By subscribing you agree to our teams & Condiions and Privacy & Cookies
        Policy{" "}
      </p>
      <input
        type="text"
        placeholder="Enter Email"
        className="border-2 border-black outline-none p-2 sm:w-8/12 w-6/12   text-lg"
      />
      <Button className="md:left-[60%] py-3">Subscribe</Button>
    </div>
  );
}
