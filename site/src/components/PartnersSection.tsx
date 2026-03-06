"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Schneider Electric", logo: "/images/partners/schneider.jpg" },
  { name: "Panduit", logo: "/images/partners/panduit.jpg" },
  { name: "Liberty AV", logo: "/images/partners/liberty.jpg" },
  { name: "D-Link", logo: "/images/partners/dlink.jpg" },
  { name: "Avaya", logo: "/images/partners/avaya.jpg" },
  { name: "Chatsworth", logo: "/images/partners/chatsworth.jpg" },
  { name: "Cisco", logo: "/images/partners/cisco.jpg" },
  { name: "Leviton", logo: "/images/partners/leviton.jpg" },
  { name: "OVRC", logo: "/images/partners/ovrc.jpg" },
  { name: "Samsung", logo: "/images/partners/samsung.jpg" },
  { name: "Sony", logo: "/images/partners/sony.jpg" },
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
          className="flex gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="shrink-0 w-28 h-16 flex items-center justify-center bg-white/[0.06] rounded-lg p-3 hover:bg-white/[0.1] transition-colors duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
