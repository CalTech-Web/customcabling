"use client";

import { motion } from "framer-motion";

const partners = [
  "Schneider Electric",
  "Panduit",
  "Liberty AV Solutions",
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
    <section className="py-16 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            Trusted Partners
          </span>
          <h2 className="text-2xl font-bold text-white mt-2">
            Brands We Work With
          </h2>
        </div>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {partners.map((partner) => (
            <div
              key={partner}
              className="px-6 py-3 rounded-lg bg-background border border-border text-gray-400 text-sm font-medium hover:text-accent-light hover:border-accent/30 transition-all duration-300"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
