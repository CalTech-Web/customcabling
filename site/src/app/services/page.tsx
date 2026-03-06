import { Metadata } from "next";
import Link from "next/link";
import {
  Network,
  Cable,
  Server,
  Camera,
  PhoneCall,
  Speaker,
  Wifi,
  Radio,
  ArrowRight,
} from "lucide-react";
import TestimonialsCTA from "@/components/TestimonialsCTA";

export const metadata: Metadata = {
  title: "Services - Custom Cabling Solutions",
  description:
    "Complete communication cabling services including structured cabling, fiber optic, datacenter build-outs, security cameras, phone systems, and more.",
};

const services = [
  {
    icon: Network,
    title: "Structured Cabling",
    href: "/services/structured-cabling",
    features: [
      "Cat5e, Cat6, and Cat6a installation",
      "Cable management and pathway systems",
      "MDF and IDF build-outs",
      "Rack and patch panel installation",
      "Cable testing and certification",
    ],
  },
  {
    icon: Cable,
    title: "Fiber Optic Cabling & Splicing",
    href: "/services/fiber-optic",
    features: [
      "Single-mode and multi-mode fiber installation",
      "Fiber blowing and pulling",
      "Fusion splicing",
      "OTDR testing and certification",
    ],
  },
  {
    icon: Server,
    title: "Datacenter Build-Outs",
    href: "/services/datacenter",
    features: [
      "Server rack installation",
      "Hot/cold aisle containment",
      "Cable tray and ladder rack systems",
      "Power distribution",
    ],
  },
  {
    icon: Camera,
    title: "Security Cameras",
    href: "/services/security-cameras",
    features: [
      "IP camera installation",
      "NVR/DVR system setup",
      "Remote viewing configuration",
      "Commercial and residential systems",
    ],
  },
  {
    icon: PhoneCall,
    title: "Digital/VOIP Phone Systems",
    href: "/services/phone-systems",
    features: [
      "IP phone system installation",
      "PBX configuration",
      "Cabling for voice networks",
      "System upgrades and migrations",
    ],
  },
  {
    icon: Speaker,
    title: "Audio/Video Distribution",
    href: "/services/audio-video",
    features: [
      "Home theater installation",
      "Commercial AV systems",
      "Conference room setup",
      "Multi-room audio distribution",
    ],
  },
  {
    icon: Wifi,
    title: "Wireless Networking Solutions",
    href: "/services/wireless",
    features: [
      "Enterprise Wi-Fi deployment",
      "Access point installation",
      "Site surveys and heat mapping",
      "Network optimization",
    ],
  },
  {
    icon: Radio,
    title: "Communications Cabling",
    href: "/services/communications",
    features: [
      "Voice and data network cabling",
      "Underground cabling systems",
      "Campus backbone cabling",
      "Building-to-building connections",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative py-24 bg-background">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Complete Communication{" "}
              <span className="text-accent">Cabling Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From structured cabling to fiber optics, datacenter build-outs to wireless
              networks - we cover every aspect of your communication infrastructure.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.href}
                className={`flex flex-col md:flex-row gap-8 items-start p-8 rounded-xl bg-surface border border-border ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-accent hover:text-accent-light text-sm font-medium transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCTA />
    </>
  );
}
