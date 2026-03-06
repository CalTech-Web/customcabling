"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Custom Cabling wired our entire office building in Roswell - Cat6 throughout, fiber backbone between floors. Clean runs, labeled perfectly, and they passed BICSI certification first try.",
    name: "Robert M.",
    role: "Facilities Director",
    company: "Commercial Office - Roswell, GA",
  },
  {
    quote:
      "We needed a full datacenter buildout on a tight timeline. Their crew handled rack installation, hot aisle containment, and all the structured cabling. Professional from start to finish.",
    name: "Jennifer L.",
    role: "IT Manager",
    company: "Healthcare Facility - Gainesville, GA",
  },
  {
    quote:
      "Outstanding residential install - whole-home networking, security cameras, and a home theater setup. They treated our home with care and the work is flawless.",
    name: "David K.",
    role: "Homeowner",
    company: "Residential - Flowery Branch, GA",
  },
];

export default function TestimonialsCTA() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            What Our Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Trusted Across Georgia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <motion.article
              key={t.name}
              className="relative p-8 rounded-2xl bg-background border border-border group hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Quote className="w-8 h-8 text-accent/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-cta text-cta" />
                ))}
              </div>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="border-t border-border pt-4">
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.role}</div>
                <div className="text-accent/60 text-xs mt-0.5">{t.company}</div>
              </footer>
            </motion.article>
          ))}
        </div>

        <div className="text-center p-12 rounded-2xl bg-gradient-to-br from-primary/40 to-accent/10 border border-accent/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Start Your Project Today
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Free on-site consultation. No obligation. Let us assess your cabling
            needs and provide a detailed proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg"
            >
              Schedule a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:6785510952"
              className="btn-outline inline-flex items-center justify-center gap-2 px-8 py-3.5 text-lg"
            >
              <Phone className="w-5 h-5" /> (678) 551-0952
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
