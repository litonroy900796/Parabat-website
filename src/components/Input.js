import React from "react";

export default function Input({ inputname, placeholder, type, ...rst }) {
  return (
    <div className="flex flex-col align-middle mt-2">
      <label className="w-fit" htmlFor="user">
        {inputname}
      </label>
      <input
        {...rst}
        className="md:w-[17rem] lg:w-[20rem] sm:w-[15rem] w-[20rem] border-2 outline-none border-[#1CC0A9] py-1 pt-1"
        type={type}
        placeholder={placeholder}
        required
        id="user"
      />
    </div>
  );
}
