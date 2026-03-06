"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Award, Shield, Building2, Users } from "lucide-react";
import GeorgiaNetworkMap from "./GeorgiaNetworkMap";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 dot-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="flex items-center gap-0">
        <div className="max-w-3xl shrink-0 relative z-10">
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
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:6785510952"
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg"
            >
              <Phone className="w-5 h-5" /> (678) 551-0952
            </a>
          </motion.div>
        </div>

        {/* Georgia network map - right column */}
        <div className="hidden lg:block flex-1 min-w-0 relative h-[600px] -mr-16">
          <GeorgiaNetworkMap />
        </div>
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {[
            { value: "25+", label: "Years in Business", icon: Award },
            { value: "BICSI", label: "Certified Standards", icon: Shield },
            { value: "3", label: "Sectors Served", icon: Building2 },
            { value: "11+", label: "Brand Partners", icon: Users },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative text-center p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]"
            >
              <stat.icon className="w-5 h-5 text-accent mx-auto mb-2 opacity-70" />
              <div className="text-2xl font-bold text-accent-light">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
