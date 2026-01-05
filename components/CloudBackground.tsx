"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CloudBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large Cloud - Left */}
            <motion.div
                className="absolute bottom-0 left-0 w-[600px] h-[400px]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <svg
                    viewBox="0 0 600 400"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <defs>
                        <linearGradient id="cloudGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#E6F2FF" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 400C0 400 100 250 250 280C250 280 300 200 400 250C500 300 550 350 600 400H0Z"
                        fill="url(#cloudGradient1)"
                    />
                </svg>
            </motion.div>

            {/* Large Cloud - Right */}
            <motion.div
                className="absolute bottom-0 right-0 w-[700px] h-[450px]"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
                <svg
                    viewBox="0 0 700 450"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <defs>
                        <linearGradient id="cloudGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#E6F2FF" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M0 450C0 450 150 300 300 320C300 320 400 250 500 300C600 350 650 400 700 450H0Z"
                        fill="url(#cloudGradient2)"
                    />
                </svg>
            </motion.div>

            {/* Medium Cloud - Center */}
            <motion.div
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[350px]"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            >
                <svg
                    viewBox="0 0 500 350"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    <defs>
                        <linearGradient id="cloudGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#E6F2FF" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
                        </linearGradient>
                    </defs>
                    <ellipse
                        cx="250"
                        cy="250"
                        rx="250"
                        ry="150"
                        fill="url(#cloudGradient3)"
                    />
                </svg>
            </motion.div>

            {/* Floating animation for subtle movement */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}
