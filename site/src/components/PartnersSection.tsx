"use client";

import { motion } from "framer-motion";

const partners = [
  "Schneider Electric",
  "Panduit",
  "Liberty AV",
  "D-Link",
  "Avaya",
  "Chatsworth",
  "Cisco",
  "Leviton",
  "OVRC",
  "Samsung",
  "Sony",
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-background border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <p className="text-center text-sm text-gray-500 uppercase tracking-wider">
          Brands We Install and Service
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <span
              key={`${partner}-${i}`}
              className="text-xl md:text-2xl font-bold text-gray-600 select-none hover:text-gray-400 transition-colors duration-300"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
