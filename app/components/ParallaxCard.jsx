"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const cards = [
  { title: "Card 1" },
  { title: "Card 2" },
  { title: "Card 3" },
  { title: "Card 4" },
  { title: "Card 5" },
];

export default function ParallaxCards() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {cards.map((card, index) => {
          const cardDuration = 0.3;
          const overlap = 0.15;

          const start = index * overlap;
          const end = start + cardDuration;

          const rawX = useTransform(
            scrollYProgress,
            [start, start + 0.05, end - 0.05, end],
            ["120vw", "0vw", "0vw", "-120vw"],
          );

          const x = useSpring(rawX, {
            stiffness: 40,
            damping: 25,
          });

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0, 1, 1, 0],
          );

          const scale = useTransform(
            scrollYProgress,
            [start, start + 0.1, end - 0.1, end],
            [0.9, 1, 1, 0.9],
          );

          return (
            <motion.div
              key={index}
              style={{ x, scale }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-80 p-6 bg-white rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold">{card.title}</h3>
              <p>Moving right to left.</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
