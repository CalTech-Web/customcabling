"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Network,
  Cable,
  Server,
  Camera,
  PhoneCall,
  Speaker,
  Wifi,
  Radio,
} from "lucide-react";
import ContactForm from "./ContactForm";

const iconMap = {
  Network,
  Cable,
  Server,
  Camera,
  PhoneCall,
  Speaker,
  Wifi,
  Radio,
} as const;

interface ServicePageLayoutProps {
  iconName: keyof typeof iconMap;
  title: string;
  description: string;
  features: string[];
}

export default function ServicePageLayout({
  iconName,
  title,
  description,
  features,
}: ServicePageLayoutProps) {
  const Icon = iconMap[iconName];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        {/* Large decorative icon */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-[0.03]">
          <Icon className="w-[400px] h-[400px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <Link
            href="/services"
            className="text-accent text-sm font-medium hover:text-accent-light transition-colors"
          >
            &larr; All Services
          </Link>
          <div className="flex items-center gap-4 mt-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">{description}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">What We Deliver</h2>
              <ul className="space-y-4">
                {features.map((f, i) => (
                  <motion.li
                    key={f}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border hover:border-accent/30 hover:bg-white/[0.02] transition-all duration-200 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-gray-300">{f}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:6785510952"
                  className="btn-outline inline-flex items-center justify-center gap-2 px-6 py-3"
                >
                  <Phone className="w-4 h-4" /> (678) 551-0952
                </a>
              </div>
            </div>

            <div>
              <div className="p-8 rounded-xl bg-background border border-border">
                <h3 className="text-xl font-bold text-white mb-6">
                  Request a Free Consultation
                </h3>
                <ContactForm source="service-request" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
