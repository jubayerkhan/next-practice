"use client";
import { delay } from "motion";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1 },
  },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export default function FeaturesList() {
  const features = ["Fast", "Reliable", "Secure", "User-Friendly"];
  return (
    <div>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="list-disc ml-5 mt-5"
      >
        {features.map((feature) => (
          <motion.li
            key={feature}
            variants={item}
            // initial="hidden"
            // animate="visible"
            // className="text-lg font-medium mb-2"
          >
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
