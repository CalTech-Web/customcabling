"use client";

import { motion } from "framer-motion";
import { Award, Shield, Building2, MapPin } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "25+",
    label: "Years in Business",
    description: "Trusted since 2001",
  },
  {
    icon: Shield,
    value: "BICSI & NEC",
    label: "Industry Standards",
    description: "Every installation certified",
  },
  {
    icon: Building2,
    value: "3 Sectors",
    label: "Commercial, Residential, Underground",
    description: "Full coverage",
  },
  {
    icon: MapPin,
    value: "Georgia",
    label: "Metro Atlanta Coverage",
    description: "Gainesville to Roswell",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-8 rounded-xl bg-surface/50 border border-border backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-4" />
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-white font-medium text-sm">{stat.label}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
