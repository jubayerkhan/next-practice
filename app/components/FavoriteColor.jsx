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
  const colorConfig = {
    red: {
      className: "text-red-500",
      text: "Red means energy and passion ❤️",
    },
    blue: {
      className: "text-blue-500",
      text: "Blue feels calm and trustworthy 🌊",
    },
    pink: {
      className: "text-pink-500",
      text: "Pink represents love and kindness 💖",
    },
    green: {
      className: "text-green-500",
      text: "Green stands for nature and growth 🌱",
    },
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
      <p
        className={`mt-5 rounded-2xl p-3 transition-all duration-300 ${bgColorMap[color]}`}
      >
        Click a button to change the background color.
      </p>
      <h3 className={`mt-5 text-2xl font-semibold transition-all duration-300 ${colorConfig[color].className}`}>
        {colorConfig[color].text}
      </h3>

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
