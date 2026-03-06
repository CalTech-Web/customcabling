"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">
              Since 2001 - Licensed & Insured
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Leading the Way with{" "}
            <span className="text-gradient">Communications Infrastructure</span>{" "}
            and Technology Systems
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Commercial, residential, and underground cabling systems built to BICSI and NEC
            industry standards. One of Georgia&apos;s most trusted cabling service providers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-lg"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:6785510952"
              className="inline-flex items-center justify-center gap-2 border border-accent/30 hover:border-accent text-accent-light px-8 py-3.5 rounded-lg font-semibold transition-colors text-lg"
            >
              <Phone className="w-5 h-5" /> (678) 551-0952
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: "25+", label: "Years in Business" },
            { value: "BICSI", label: "Certified Standards" },
            { value: "3", label: "Sectors Served" },
            { value: "11+", label: "Brand Partners" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
