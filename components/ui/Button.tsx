"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    icon?: React.ReactNode;
    href?: string;
    className?: string;
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    icon,
    href,
    className = "",
    onClick,
}: ButtonProps) {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ease-out";

    const variantStyles = {
        primary:
            "bg-[#0066FF] text-white hover:bg-[#0052CC] hover:shadow-lg hover:scale-105 active:scale-95",
        secondary:
            "bg-white text-[#0066FF] border-2 border-[#0066FF] hover:bg-[#E6F2FF] hover:scale-105 active:scale-95",
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    const content = (
        <>
            {icon && <span className="w-5 h-5">{icon}</span>}
            {children}
        </>
    );

    if (href) {
        return (
            <motion.a
                href={href}
                className={combinedClassName}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            className={combinedClassName}
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {content}
        </motion.button>
    );
}
