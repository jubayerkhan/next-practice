"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function StickyCards() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    { title: "Design", color: "bg-red-500" },
    { title: "Development", color: "bg-blue-500" },
    { title: "Deployment", color: "bg-green-500" },
  ];

  return (
    <section ref={containerRef} className="relative h-[300vh] my-10">
      {cards.map((card, index) => {
        const scale = useTransform(
          scrollYProgress,
          [index * 0.2, 1],
          [1, 0.85],
        );

        const y = useTransform(
          scrollYProgress,
          [index * 0.2, 1],
          [0, -80 * index],
        );

        return (
          <motion.div
            key={index}
            style={{ scale, y }}
            className={`sticky top-20 h-[70vh] rounded-3xl ${card.color}
              flex items-center justify-center text-white text-4xl font-bold shadow-xl`}
          >
            {card.title}
          </motion.div>
        );
      })}
    </section>
  );
}
