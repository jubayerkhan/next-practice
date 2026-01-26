"use client";
import { useState } from "react";
import { motion, scale } from "motion/react";
import AnimateButton from "./AnimateButton";

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
    <div className="mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`rounded-2xl p-4 text-white transition-all duration-300 text-2xl font-medium ${
          bgColorMap[color]
        }`}
      >
        My favorite color is {color}!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`mt-5 rounded-2xl p-3 transition-all duration-300 ${bgColorMap[color]}`}
      >
        Click a button to change the background color.
      </motion.p>
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`mt-5 text-2xl font-semibold transition-all duration-300 ${colorConfig[color].className}`}
      >
        {colorConfig[color].text}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="flex gap-5 pt-10"
      >
        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="button_style"
          onClick={() => setColor("blue")}
        >
          Blue
        </motion.button>
        {/* <motion.button
          whileHover={{ scale: 1.1 }}
          className="button_style"
          onClick={() => setColor("red")}
        >
          Red
        </motion.button> */}
        <AnimateButton onClick={() => setColor("red")}>RED</AnimateButton>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="button_style"
          onClick={() => setColor("pink")}
        >
          Pink
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="button_style"
          onClick={() => setColor("green")}
        >
          Green
        </motion.button>
      </motion.div>
    </div>
  );
}
