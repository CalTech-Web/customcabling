"use client";

import { motion } from "framer-motion";
import { ClipboardList, Pencil, Wrench, CheckCircle, Headphones } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Consultation",
    description: "We assess your location and cabling needs through an on-site or virtual consultation.",
  },
  {
    icon: Pencil,
    title: "Design",
    description: "Our team creates a custom cabling plan tailored to your building and requirements.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Licensed technicians install your cabling system per BICSI and NEC standards.",
  },
  {
    icon: CheckCircle,
    title: "Testing",
    description: "Every cable run is tested and certified to ensure optimal performance.",
  },
  {
    icon: Headphones,
    title: "Support",
    description: "Ongoing maintenance and support to keep your systems running.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Our Process
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            From first contact to ongoing support, every project follows a proven process
            built on 25 years of experience.
          </p>
        </div>

        <div className="relative">
          {/* Connector line - aligned to center of circles */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 list-none">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 border-2 border-accent/40 flex items-center justify-center mb-4 relative z-10 shadow-lg shadow-accent/10">
                  <step.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-1">
                  Step {i + 1}
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
