"use client";
import { useState } from "react";

export default function FavoriteColor() {
  const [color, setColor] = useState("blue");

  const bgColorMap = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    pink: "bg-pink-400",
    green: "bg-green-400",
  };

  return (
    <>
      <h1
        className={`rounded-2xl p-4 text-white transition-all duration-300 ${
          bgColorMap[color]
        }`}
      >
        My favorite color is {color}!
      </h1>

      <div className="flex gap-5 pt-10">
        <button className="button_style" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className="button_style" onClick={() => setColor("red")}>
          Red
        </button>
        <button className="button_style" onClick={() => setColor("pink")}>
          Pink
        </button>
        <button className="button_style" onClick={() => setColor("green")}>
          Green
        </button>
      </div>
    </>
  );
}
