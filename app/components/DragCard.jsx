"use client";
import { delay } from "motion";
import { motion } from "motion/react";

export default function DragCard() {
  return (
    <div>
      <motion.div
        className="p-2 rounded-lg bg-blue-400 max-w-max"
        drag
        dragConstraints={{ top: -80, left: -80, right: 80, bottom: 80 }}
        dragElastic={0.2}
      >
        Drag Card
      </motion.div>
    </div>
  );
}
