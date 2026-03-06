"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Structured Cabling", href: "/services/structured-cabling" },
  { name: "Fiber Optic Cabling", href: "/services/fiber-optic" },
  { name: "Datacenter Build-Outs", href: "/services/datacenter" },
  { name: "Security Cameras", href: "/services/security-cameras" },
  { name: "Phone Systems", href: "/services/phone-systems" },
  { name: "Audio/Video", href: "/services/audio-video" },
  { name: "Wireless Networking", href: "/services/wireless" },
  { name: "Communications Cabling", href: "/services/communications" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <a href="tel:6785510952" className="flex items-center gap-2 hover:text-accent-light transition-colors">
            <Phone className="w-4 h-4" />
            (678) 551-0952
          </a>
          <a href="mailto:info@customcablingsolutions.com" className="hidden sm:block hover:text-accent-light transition-colors">
            info@customcablingsolutions.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header className="bg-surface/95 backdrop-blur-md sticky top-0 z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Custom Cabling Solutions" className="h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-surface border border-border rounded-lg shadow-xl py-2"
                  >
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-surface-light transition-colors"
                    >
                      All Services
                    </Link>
                    <div className="border-t border-border my-1" />
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-surface-light transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/industries" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Industries
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:6785510952" className="text-gray-300 hover:text-white text-sm flex items-center gap-1">
              <Phone className="w-4 h-4" /> (678) 551-0952
            </a>
            <Link
              href="/contact"
              className="bg-cta hover:bg-cta-hover text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all shadow-md shadow-cta/20 hover:shadow-lg hover:shadow-cta/25"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-surface border-t border-border overflow-hidden"
            >
              <nav className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                <Link href="/" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
                <Link href="/services" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                  Services
                </Link>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block pl-4 text-sm text-gray-400 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.name}
                  </Link>
                ))}
                <Link href="/industries" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                  Industries
                </Link>
                <Link href="/about" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white" onClick={() => setMobileOpen(false)}>
                  Contact
                </Link>
                <Link
                  href="/contact"
                  className="block btn-primary text-center py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Quote
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
