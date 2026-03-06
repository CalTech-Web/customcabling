import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Building2, Home, Heart, GraduationCap, Landmark, Server, ArrowRight } from "lucide-react";
import TestimonialsCTA from "@/components/TestimonialsCTA";

type Feature = { label: string; href?: string };

export const metadata: Metadata = {
  title: "Industries We Serve | Custom Cabling Solutions in Georgia",
  description:
    "Cabling solutions for commercial, residential, healthcare, education, government, and data center environments across Georgia.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries We Serve | Custom Cabling Solutions in Georgia",
    description:
      "Cabling solutions for commercial, residential, healthcare, education, government, and data center environments across Georgia.",
    url: "https://customcablingsolutions.com/industries",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Industries We Serve | Custom Cabling Solutions in Georgia",
    description:
      "Cabling solutions for commercial, residential, healthcare, education, government, and data center environments across Georgia.",
  },
};

const industries: { icon: React.ElementType; name: string; description: string; features: Feature[] }[] = [
  {
    icon: Building2,
    name: "Commercial",
    description:
      "Office buildings, retail spaces, warehouses, and corporate campuses. Structured cabling, fiber, and network infrastructure designed for business-critical operations.",
    features: [
      { label: "Structured cabling", href: "/services/structured-cabling" },
      { label: "Fiber backbone", href: "/services/fiber-optic" },
      { label: "Security systems", href: "/services/security-cameras" },
      { label: "Conference room AV", href: "/services/audio-video" },
    ],
  },
  {
    icon: Home,
    name: "Residential",
    description:
      "Whole-home networking, home theaters, security cameras, and smart home cabling. Future-proof your home with professionally installed infrastructure.",
    features: [
      { label: "Home theater", href: "/services/audio-video" },
      { label: "Whole-home Wi-Fi", href: "/services/wireless" },
      { label: "Security cameras", href: "/services/security-cameras" },
      { label: "Multi-room audio", href: "/services/audio-video" },
    ],
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "Hospitals, clinics, and medical offices require reliable, compliant cabling infrastructure. We deliver systems that support critical medical technology.",
    features: [
      { label: "HIPAA-conscious installations", href: "/services/structured-cabling" },
      { label: "Nurse call systems", href: "/services/communications" },
      { label: "Medical device connectivity", href: "/services/structured-cabling" },
      { label: "Fiber optic networks", href: "/services/fiber-optic" },
    ],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Schools, universities, and training facilities need robust network infrastructure. We cable classrooms, labs, and administrative buildings.",
    features: [
      { label: "Campus-wide cabling", href: "/services/communications" },
      { label: "Classroom AV systems", href: "/services/audio-video" },
      { label: "Wi-Fi infrastructure", href: "/services/wireless" },
      { label: "Security cameras", href: "/services/security-cameras" },
    ],
  },
  {
    icon: Landmark,
    name: "Government",
    description:
      "Government buildings and facilities demand secure, standards-compliant cabling. We meet the strict requirements of public sector projects.",
    features: [
      { label: "Secure installations", href: "/services/structured-cabling" },
      { label: "Standards compliance", href: "/services/communications" },
      { label: "Building-wide networks", href: "/services/wireless" },
      { label: "Emergency communication systems", href: "/services/phone-systems" },
    ],
  },
  {
    icon: Server,
    name: "Data Centers",
    description:
      "Purpose-built datacenter cabling with server racks, containment systems, and high-density fiber. Designed for performance and scalability.",
    features: [
      { label: "Rack installation", href: "/services/datacenter" },
      { label: "Hot/cold aisle containment", href: "/services/datacenter" },
      { label: "High-density fiber", href: "/services/fiber-optic" },
      { label: "Cable management", href: "/services/structured-cabling" },
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="relative py-24 bg-background">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Industries
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Industries <span className="text-accent">We Serve</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              25 years of experience across every building type and cabling challenge.
              Based in Flowery Branch, Georgia - serving the greater Atlanta metro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="p-8 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
              >
                <industry.icon className="w-10 h-10 text-accent mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">{industry.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.features.map((f) => (
                    <li key={f.label} className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {f.href ? (
                        <Link href={f.href} className="hover:text-accent transition-colors">
                          {f.label}
                        </Link>
                      ) : (
                        f.label
                      )}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-lg"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsCTA />
    </>
  );
}
