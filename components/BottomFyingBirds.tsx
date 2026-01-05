"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const birds = [
  { top: "20%", left: "25%", delay: 0 },
  { top: "57%", left: "10%", delay: 3 },
   { top: "20%", left: "70%", delay: 0 },
  { top: "57%", left: "90%", delay: 3 },
];

export default function BottomBirds() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-64 pointer-events-none overflow-hidden">
      {birds.map((bird, i) => (
         <motion.div
                  key={i}
                  className="absolute"
                  style={{ top: bird.top, left: bird.left }}
                  animate={{
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10,
                    delay: bird.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/bottomBird.png"
                    alt="bird"
                    width={48}
                    height={18}
                    className="opacity-70"
                  />
                </motion.div>
      ))}
    </div>
  );
}
