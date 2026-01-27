"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function SlideUpStack() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = [
    { title: "Discovery", color: "bg-green-800" },
    { title: "Design", color: "bg-red-700" },
    { title: "Development", color: "bg-blue-400" },
    { title: "Launch", color: "bg-zinc-500" },
  ];

  return (
    <section ref={containerRef} className="relative h-[250vh] my-10">
      <div className="sticky top-24 h-screen flex items-center justify-center overflow-hidden">
        {cards.map((card, index) => {
          const start = index * 0.25;
          const end = start + 0.25;

          const y = useTransform(
            scrollYProgress,
            [start, end],
            [0, -300] // 👈 fully slides out upward
          );

          const opacity = useTransform(
            scrollYProgress,
            [start, end],
            [1, 0]
          );

          return (
            <motion.div
              key={index}
              style={{
                y,
                opacity,
                zIndex: cards.length - index,
              }}
              className={`absolute h-[50vh] w-full max-w-4xl
                rounded-3xl ${card.color}
                flex items-center justify-center
                text-white text-4xl font-bold shadow-2xl`}
            >
              {card.title}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
