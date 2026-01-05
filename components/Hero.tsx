// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Download, ChevronDown, Sparkles } from "lucide-react";
// // import Button from "./ui/Button";
// // import CloudBackground from "./CloudBackground";
// // import FlyingBirds from "./FlyingBirds";

// // export default function Hero() {
// //     return (
// //         <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#c1d6f5] pt-20">
// //             {/* Background Elements */}
// //             <CloudBackground />
// //             <FlyingBirds />

// //             {/* Hero Content */}
// //             <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
// //                 {/* Badge */}
// //                 <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.6, delay: 0.2 }}
// //                     className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E6F2FF] text-[#0066FF] text-sm font-medium mb-6 shadow-sm"
// //                 >
// //                     {/* <Sparkles size={16} className="" /> */}

// //                    <Button
// //                    variant="transparent"
// //                                className="h-8 px-6 w-55 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all"
// //                              >
// //                                Message Automation tool
// //                              </Button>
// //                 </motion.div>

// //                 {/* Main Heading */}
// //                 <motion.h1
// //                     initial={{ opacity: 0, y: 30 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.8, delay: 0.4 }}
// //                     className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8 tracking-tight"
// //                 >
// //                     <span className="text-[#0066FF]">iMessage</span>{" "}
// //                     <span className="text-black">Automation</span>
// //                     <br />
// //                     <span className="text-black">for Teams and AI</span>
// //                     <br />
// //                     <span className="text-black">Workflows.</span>
// //                 </motion.h1>

// //                 {/* Description */}
// //                 <motion.p
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.8, delay: 0.6 }}
// //                     className=" md:text-lg text-[#666666] max-w-2xl mx-auto mb-10 leading-relaxed px-4 text-center"
// //                 >
// //                     Elevate your team's productivity with iMessage automation and AI-powered
// //                     workflows that streamline communication and drive measurable growth.
// //                 </motion.p>

// //                 {/* CTA Buttons */}
// //                 <motion.div
// //                     initial={{ opacity: 0, y: 20 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.8, delay: 0.8 }}
// //                     className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
// //                 >
// //                     <motion.button
// //                         className="px-8 py-3.5 bg-[#0066FF] text-white rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300"
// //                         whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 102, 255, 0.3)" }}
// //                         whileTap={{ scale: 0.95 }}
// //                     >
// //                         <Button
// //                    variant="primary"

// //                                className="h-9 px-6 w-25 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all"
// //                              >
// //                               Get Started
// //                              </Button>
// //                     </motion.button>
// //                     <motion.button
// //                         className="px-8 py-3.5 bg-white text-[#0066FF] border-2 border-[#0066FF] rounded-full font-medium text-base flex items-center gap-2 hover:bg-[#E6F2FF] transition-all duration-300"
// //                         whileHover={{ scale: 1.05 }}
// //                         whileTap={{ scale: 0.95 }}
// //                     >
// //                         <Download size={18} />
// //                       <Button
// //                    variant="primary"

// //                                className="h-9 px-6 w-55 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all"
// //                              >
// //                               Download the Mack App
// //                              </Button>
// //                     </motion.button>
// //                 </motion.div>

// //                 {/* Scroll Indicator */}
// //                 <motion.div
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     transition={{ duration: 0.8, delay: 1.2 }}
// //                     className="flex flex-col items-center gap-2 text-[#999999] text-xs font-medium tracking-widest mt-4"
// //                 >
// //                     <span>SCROLL DOWN FOR MORE</span>
// //                     <motion.div
// //                         animate={{
// //                             y: [0, 8, 0],
// //                         }}
// //                         transition={{
// //                             duration: 1.5,
// //                             repeat: Infinity,
// //                             ease: "easeInOut",
// //                         }}
// //                     >
// //                         <ChevronDown size={20} className="text-[#999999]" />
// //                     </motion.div>
// //                 </motion.div>
// //             </div>
// //         </section>
// //     );
// // }










// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Download, ChevronDown } from "lucide-react";
// import Button from "./ui/Button";
// import CloudBackground from "./CloudBackground";
// import FlyingBirds from "./FlyingBirds";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#c1d6f5] pt-24">
//       {/* Background */}
//       <CloudBackground />
//       <FlyingBirds />

//       {/* Content */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="inline-flex items-center rounded-full bg-[#E6F2FF] text-[#0066FF] text-sm font-medium px-5 py-2 mb-6 shadow-sm"
//         >
//           Message Automation Tool
//         </motion.div>

//         {/* Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="
//             font-bold tracking-tight leading-tight
//             text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//             mb-6
//           "
//         >
//           <span className="text-[#0066FF]">iMessage</span>{" "}
//           <span className="text-black">Automation</span>
//           <br />
//           <span className="text-black">for Teams & AI</span>
//           <br />
//           <span className="text-black">Workflows</span>
//         </motion.h1>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.4 }}
//           className="
//             text-sm sm:text-base md:text-lg
//             text-[#666666]
//             max-w-2xl mx-auto
//             mb-10
//           "
//         >
//           Elevate your team’s productivity with iMessage automation and AI-powered
//           workflows that streamline communication and drive measurable growth.
//         </motion.p>

//         {/* CTAs */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, delay: 0.6 }}
//           className="
//             flex flex-col sm:flex-row
//             items-center justify-center
//             gap-4 mb-16
//           "
//         >
//           <Button
//             variant="primary"
//             className="
//               h-11 px-8 rounded-full text-sm sm:text-base
//               shadow-lg hover:shadow-xl transition-all
//             "
//           >
//             Get Started
//           </Button>

//           <Button
//             variant="outline"
//             className="
//               h-11 px-8 rounded-full text-sm sm:text-base
//               flex items-center gap-2
//             "
//           >
//             <Download size={18} />
//             Download Mac App
//           </Button>
//         </motion.div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="flex flex-col items-center text-xs tracking-widest text-[#999999]"
//         >
//           <span>SCROLL</span>
//           <motion.div
//             animate={{ y: [0, 8, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity }}
//           >
//             <ChevronDown size={20} />
//           </motion.div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }









"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import Button from "./ui/Button";
import CloudBackground from "./CloudBackground";
import FlyingBirds from "./FlyingBirds";
import Image from "next/image";
import TopBirds from "./FlyingBirds";
import BottomBirds from "./BottomFyingBirds";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#b4d0fa]">
      {/* Background visuals */}
      <CloudBackground />
      {/* <FlyingBirds /> */}
      <TopBirds />


      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">

        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            mb-6 inline-flex items-center gap-2
            rounded-full bg-white px-4 py-1.5
            text-xs font-medium text-[#0066FF]
            shadow-sm
          "
        >
            <span style={{ padding: "14px", color: "#0066FF" }}>#1 iMessage Automation Tool
</span>
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ padding: '5px' }}
          className="
    inline-flex items-center gap-3
    px-4 py-2
    rounded-full
    bg-[#EAF4FF]
    text-[#0066FF]
    text-sm font-medium
    shadow-sm
  "
        >
          {/* Left dots bubble */}
          <span
            className="
      flex items-center justify-center
      h-6 w-10
      rounded-full
      bg-[#0066FF]
      text-white
      text-xs
      font-bold
      leading-none
    "
          >
            •••
          </span>

          {/* Text */}
          <span>#1 iMessage Automation Tool</span>
        </motion.div>


        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-4xl font-bold tracking-tight
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            leading-tight text-[#0F172A]
          "
        >
          <span className="text-[#0066FF]" >iMessage Automation</span>
          <br />
          for Teams and AI
          <br />
          Workflows.
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-6 max-w-2xl
            text-sm sm:text-base
            text-[#475569]
          "
        >
          Coup lets you, your team, or AI workflows send iMessages directly
          from your phone number, running securely on your Mac or Mac Mini.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="
            flex flex-col items-center gap-6
            sm:flex-row 
          "
        >
          <div className="w-full flex flex-row items-center justify-around gap-6" style={{ marginTop: "24px" }}>
            <Button
              variant="primary"
              className="h-8 px-6 w-28 rounded-full text-sm font-semibold mt-6"
            >
              Get Started
            </Button>

            <Button
              variant="secondary"
              className="h-8 px-6 rounded-full text-sm font-medium
    flex items-center gap-4 border border-gray-500
  "
            >
              <Image
                src="/Vector.png"
                alt="logo"
                width={20}
                height={5}
                style={{ marginLeft: "5px" }}
                className="h-4 px-20 object-contain bg-transparent rounded-2xl"
              />

              <span className="h-4 w-px bg-gray-500" />

              <span style={{ marginRight: "5px" }}>Download the Mac app</span>
            </Button>
          </div>

        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 text-xs text-[#64748B]"
        >
          Scroll to learn more ↓
        </motion.div>
      </div>
      <BottomBirds />
    </section>


  );
}
