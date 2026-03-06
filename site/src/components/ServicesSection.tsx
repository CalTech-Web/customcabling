"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Network,
  Cable,
  Server,
  Camera,
  PhoneCall,
  Speaker,
  Wifi,
  Radio,
} from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Structured Cabling",
    description: "Cat5e, Cat6, and Cat6a installation with full testing and certification.",
    href: "/services/structured-cabling",
    image: "/images/services/structured-cabling.jpg",
    altText: "Structured cabling installation in Georgia by Custom Cabling Solutions",
  },
  {
    icon: Cable,
    title: "Fiber Optic Cabling",
    description: "Single-mode and multi-mode fiber installation, splicing, and OTDR testing.",
    href: "/services/fiber-optic",
    image: "/images/services/fiber-optics.jpg",
    altText: "Fiber optic installation and fusion splicing in Georgia",
  },
  {
    icon: Server,
    title: "Datacenter Build-Outs",
    description: "Server racks, cable tray systems, and hot/cold aisle containment.",
    href: "/services/datacenter",
    image: "/images/services/datacenter.jpg",
    altText: "Data center cabling and rack installation in Georgia",
  },
  {
    icon: Camera,
    title: "Security Cameras",
    description: "IP camera systems with NVR setup and remote viewing configuration.",
    href: "/services/security-cameras",
    image: "/images/services/security-cameras.jpg",
    altText: "IP security camera installation in Georgia by Custom Cabling Solutions",
  },
  {
    icon: PhoneCall,
    title: "Phone Systems",
    description: "Digital and VOIP phone system installation, PBX configuration, and upgrades.",
    href: "/services/phone-systems",
    image: "/images/services/office-cabling.jpg",
    altText: "VoIP and digital phone system installation in Georgia",
  },
  {
    icon: Speaker,
    title: "Audio/Video",
    description: "Home theaters, commercial AV, conference rooms, and multi-room audio.",
    href: "/services/audio-video",
    image: "/images/services/audio-video.jpg",
    altText: "Audio video installation in Georgia for commercial and residential",
  },
  {
    icon: Wifi,
    title: "Wireless Networking",
    description: "Enterprise Wi-Fi deployment, site surveys, and network optimization.",
    href: "/services/wireless",
    image: "/images/services/wireless.jpg",
    altText: "Enterprise wireless network installation in Georgia",
  },
  {
    icon: Radio,
    title: "Communications Cabling",
    description: "Voice and data networks, underground systems, and campus backbone cabling.",
    href: "/services/communications",
    image: "/images/services/cable-rearrangement.jpg",
    altText: "Communications cabling and underground cable installation in Georgia",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-surface subtle-grid">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Complete Communication Cabling Services
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Whether you are constructing, moving, or upgrading, we have tailored services
            to meet all your requirements. One of the best cabling services in Georgia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Link
                href={service.href}
                className="group block rounded-xl bg-background border border-border hover:border-accent/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.altText}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                </div>
                <div className="p-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
