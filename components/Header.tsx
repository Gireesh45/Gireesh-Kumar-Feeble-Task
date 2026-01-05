"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");

  const navItems = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Join Class", href: "#join-class" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Sales", href: "#contact-sales" },
  ];

  // 🔹 Active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveTab(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <motion.header
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="
    fixed top-10 left-20 right-15 z-70
    bg-white/90 backdrop-blur-lg
    border border-gray-100
    rounded-2xl
  "
>

      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src="/logo.jpg"
            alt="logo"
            width={100}
            height={40}
            style={{ marginLeft: "24px" }}
            className="h-10  px-20 w-23 object-contain bg-transparent rounded-2xl"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8" style={{ padding: "14px" }}>
         {navItems.map((item) => (
  <a
    key={item.label}
    href={item.href}
    className={`
      text-sm font-medium transition-colors
      ${item.label === "Contact Sales" ? "md:hidden" : ""}
    `}
  >
    {item.label}
  </a>
))}

        </div>

        {/* CTA Button */}
        <div className="hidden md:block " style={{ margin: "4px" }}>
          <Button
            variant="primary"
            
            className="h-8 px-6 w-35 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all"
          >
            Contact Sales
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          style={{ margin: "4px" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveTab(item.href);
                    setMobileMenuOpen(false);
                  }}
                  style={{ margin: "10px" }}
                  className={`
                    py-2 px-2font-medium
                    ${activeTab === item.href ? "text-[#0066FF]" : "text-[#666666]"}
                  `}
                >
                  {item.label}
                </a>
              ))}

             <div style={{ marginBottom: "10px", marginLeft: "5px" }}>
          {/* <Button
            variant="primary"
            
            className="h-8 px-6 w-35 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all"
          >
            Contact Sales
          </Button> */}
        </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
