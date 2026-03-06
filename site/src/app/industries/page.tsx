import { Metadata } from "next";
import Link from "next/link";
import { Building2, Home, Heart, GraduationCap, Landmark, Server, ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Industries We Serve - Custom Cabling Solutions",
  description:
    "Cabling solutions for commercial, residential, healthcare, education, government, and data center environments across Georgia.",
};

const industries = [
  {
    icon: Building2,
    name: "Commercial",
    description:
      "Office buildings, retail spaces, warehouses, and corporate campuses. Structured cabling, fiber, and network infrastructure designed for business-critical operations.",
    features: ["Structured cabling", "Fiber backbone", "Security systems", "Conference room AV"],
  },
  {
    icon: Home,
    name: "Residential",
    description:
      "Whole-home networking, home theaters, security cameras, and smart home cabling. Future-proof your home with professionally installed infrastructure.",
    features: ["Home theater", "Whole-home Wi-Fi", "Security cameras", "Multi-room audio"],
  },
  {
    icon: Heart,
    name: "Healthcare",
    description:
      "Hospitals, clinics, and medical offices require reliable, compliant cabling infrastructure. We deliver systems that support critical medical technology.",
    features: ["HIPAA-conscious installations", "Nurse call systems", "Medical device connectivity", "Fiber optic networks"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description:
      "Schools, universities, and training facilities need robust network infrastructure. We cable classrooms, labs, and administrative buildings.",
    features: ["Campus-wide cabling", "Classroom AV systems", "Wi-Fi infrastructure", "Security cameras"],
  },
  {
    icon: Landmark,
    name: "Government",
    description:
      "Government buildings and facilities demand secure, standards-compliant cabling. We meet the strict requirements of public sector projects.",
    features: ["Secure installations", "Standards compliance", "Building-wide networks", "Emergency communication systems"],
  },
  {
    icon: Server,
    name: "Data Centers",
    description:
      "Purpose-built datacenter cabling with server racks, containment systems, and high-density fiber. Designed for performance and scalability.",
    features: ["Rack installation", "Hot/cold aisle containment", "High-density fiber", "Cable management"],
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
              Industries <span className="text-gradient">We Serve</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              25 years of experience across every building type and cabling challenge.
              Based in Flowery Branch, Georgia - serving the greater Atlanta metro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="p-8 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300"
              >
                <industry.icon className="w-10 h-10 text-accent mb-4" />
                <h2 className="text-xl font-bold text-white mb-3">{industry.name}</h2>
                <p className="text-gray-400 text-sm mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-gray-500 text-xs">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-lg"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
