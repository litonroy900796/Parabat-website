import React from "react";
import Button from "./Button";
export default function Selinformation({ header, dec, btntitle, Btnposition }) {
  return (
    <div className="relative ">
      <h1 className="font-bold md:text-4xl sm:text-2xl text-4xl mb-4">
        {header}
      </h1>
      <p className="text-sm mb-4 text-gray-500">{dec}</p>
      <Button className={`bottom-[-5rem] ${Btnposition}`}>{btntitle}</Button>
    </div>
  );
}
