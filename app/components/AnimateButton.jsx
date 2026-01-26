"use client";
import { useState } from "react";
import { motion, scale } from "motion/react";

export default function AnimateButton({
    children,
    stiffness = 300,
    damping = 15,
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9, y: 1 }}
      transition={{ type: "spring", stiffness, damping }}
      className="button_style"
      onClick={() => setColor("blue")}
    >
      {children}
    </motion.button>
  );
}
