import React from "react";

export default function Cheakbox({ ...rst }) {
  return (
    <div className="flex  mt-2 ">
      <input type="checkbox" {...rst} />
      <label>I agree the policy & secuity</label>
    </div>
  );
}
