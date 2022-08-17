import React from "react";

export default function Button({ children, className }) {
  return (
    <button
      type="submit"
      className={`bg-black text-white
      py-5 px-12 absolute z-0 ${className}`}
    >
      {children}
    </button>
  );
}
