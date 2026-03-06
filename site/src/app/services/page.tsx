import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
  title: "Cabling Services in Georgia | Custom Cabling Solutions",
  description:
    "Complete communication cabling services including structured cabling, fiber optic, datacenter build-outs, security cameras, phone systems, and more.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    icon: Network,
    title: "Structured Cabling",
    href: "/services/structured-cabling",
    image: "/images/services/structured-cabling.jpg",
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
    image: "/images/services/fiber-optics.jpg",
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
    image: "/images/services/datacenter.jpg",
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
    image: "/images/services/security-cameras.jpg",
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
    image: "/images/services/office-cabling.jpg",
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
    image: "/images/services/audio-video.jpg",
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
    image: "/images/services/wireless.jpg",
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
    image: "/images/services/cable-rearrangement.jpg",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-xl bg-surface border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-lg bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-white mb-2">{service.title}</h2>
                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1 text-accent group-hover:text-accent-light text-sm font-medium transition-colors">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCTA />
    </>
  );
}
