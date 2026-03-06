"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We are based in Flowery Branch, Georgia and serve the greater Atlanta metro area including Gainesville, Roswell, Athens, Gwinnett County, and surrounding communities.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Custom Cabling Solutions is a low-voltage unrestricted licensed and insured cabling company.",
  },
  {
    q: "What industry standards do you follow?",
    a: "All of our installations follow BICSI and NEC industry standards to ensure quality, safety, and compliance.",
  },
  {
    q: "Do you handle both commercial and residential projects?",
    a: "Yes. We specialize in commercial, residential, and underground cabling systems. No project is too large or too small.",
  },
  {
    q: "What types of cabling do you install?",
    a: "We install structured cabling (Cat5e, Cat6, Cat6a), fiber optic (single-mode and multi-mode), coaxial, and specialty low-voltage cabling for security, audio/video, and phone systems.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. Contact us to schedule a free on-site or virtual consultation to discuss your cabling needs.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-lg overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border border-accent/30 bg-white/[0.02]"
                  : "border border-border hover:border-accent/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-all duration-200"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-white font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-accent shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
