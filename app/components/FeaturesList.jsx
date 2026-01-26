"use client";
import { motion } from "motion/react";

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3 }
    }
}

export default function FeaturesList() {
  const features = ["Fast", "Reliable", "Secure", "User-Friendly"];
  return (
    <div>
      <motion.ul
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="list-disc ml-5 mt-5"
      >
        {features.map((feature) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.5 }}
          >
            {feature}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
