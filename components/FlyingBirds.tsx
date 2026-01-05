// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function FlyingBirds() {
//     // Bird positions and animation configurations
//     const birds = [
//         { id: 1, x: "10%", y: "20%", delay: 0, duration: 8, scale: 0.8 },
//         { id: 2, x: "20%", y: "35%", delay: 1, duration: 10, scale: 1 },
//         // { id: 3, x: "75%", y: "15%", delay: 2, duration: 9, scale: 0.9 },
//         { id: 4, x: "85%", y: "30%", delay: 0.5, duration: 11, scale: 0.7 },
//         // { id: 5, x: "50%", y: "25%", delay: 1.5, duration: 12, scale: 0.85 },
//         { id: 6, x: "90%", y: "50%", delay: 2.5, duration: 10, scale: 0.75 },
//          { id: 7, x: "15%", y: "90%", delay: 0.5, duration: 8, scale: 2 },
//                 { id: 8, x: "35%", y: "84%", delay: 0.5, duration: 10, scale: 2 },
//                   { id: 9, x: "65%", y: "90%", delay: 2.5, duration: 9, scale: 2 },
//                 { id: 8, x: "85%", y: "84%", delay: 1, duration: 11, scale: 2 },

//     ];

//     // Bird SVG path (simple bird silhouette)
//     const BirdSVG = ({ scale }: { scale: number }) => (
//         <svg
//             width={40 * scale}
//             height={30 * scale}
//             viewBox="0 0 40 30"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 d="M2 15C2 15 8 8 15 10C15 10 15 5 20 5C25 5 25 10 25 10C32 8 38 15 38 15C38 15 32 12 25 14C25 14 25 20 20 20C15 20 15 14 15 14C8 12 2 15 2 15Z"
//                 fill="#1A1A2E"
//                 opacity="0.8"
//             />
//         </svg>
//     );

//     return (
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {birds.map((bird) => (
//                 <motion.div
//                     key={bird.id}
//                     className="absolute"
//                     style={{
//                         left: bird.x,
//                         top: bird.y,
//                     }}
//                     animate={{
//                         y: [0, -20, 0, -15, 0],
//                         x: [0, 10, -5, 8, 0],
//                         rotate: [3, 5, -3, 9, 0],
//                     }}
//                     transition={{
//                         duration: bird.duration,
//                         delay: bird.delay,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                     }}
//                 >
//                     <BirdSVG scale={bird.scale} />
//                 </motion.div>
//             ))}
//         </div>
//     );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const birds = [
  { top: "20%", left: "15%", delay: 0 },
  { top: "30%", left: "20%", delay: 3 },
   { top: "20%", left: "85%", delay: 0 },
  { top: "30%", left: "90%", delay: 3 },
];

export default function TopBirds() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {birds.map((bird, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: bird.top, left: bird.left }}
          animate={{
            x: [0, 20, 0],
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
            src="/Vector (1).png"
            alt="bird"
            width={28}
            height={14}
            className="opacity-70"
          />
        </motion.div>
      ))}
    </div>
  );
}

