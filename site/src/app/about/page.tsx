import { Metadata } from "next";
import Image from "next/image";
import { Award, Shield, Users, MapPin } from "lucide-react";
import TestimonialsCTA from "@/components/TestimonialsCTA";

export const metadata: Metadata = {
  title: "About Us - Custom Cabling Solutions",
  description:
    "25+ years of experience in commercial, residential, and underground cabling systems. Licensed, insured, and BICSI/NEC compliant.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-background">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            Communication Infrastructure Specialists{" "}
            <span className="text-accent">Since 2001</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            Custom Cabling Solutions is a low-voltage unrestricted licensed and insured
            cabling and technology company. We have been in the industry since 2001 and
            specialize in commercial, residential, and underground cabling systems per
            BICSI and NEC industry standards.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Philosophy</h2>
              <blockquote className="border-l-4 border-accent pl-6 mb-8">
                <p className="text-gray-300 text-lg italic">
                  &quot;We take pride in the high quality of our services while putting safety
                  and security first for our customers.&quot;
                </p>
              </blockquote>
              <p className="text-gray-400 mb-4">
                Every project gets expert attention. We are not generalists - we are
                communication infrastructure specialists with 25 years of field experience.
                We have seen every building type and cabling challenge.
              </p>
              <p className="text-gray-400">
                BICSI and NEC standards are not optional. Every installation meets or
                exceeds code. Quality workmanship you can see in every cable run, every
                termination, every test result.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "25+ Years",
                  desc: "In the cabling industry since 2001",
                },
                {
                  icon: Shield,
                  title: "Licensed & Insured",
                  desc: "Low-voltage unrestricted license",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  desc: "Trained and certified technicians",
                },
                {
                  icon: MapPin,
                  title: "Georgia Roots",
                  desc: "Serving the greater Atlanta metro",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Our Work
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            A look at some of our recent projects across Georgia.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="relative group rounded-xl overflow-hidden aspect-[4/3]"
              >
                <Image
                  src={`/images/work/${n}.jpg`}
                  alt={`Project ${n}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Licensed and insured low-voltage unrestricted cabling company",
              "In business since 2001 with 25+ years of experience",
              "BICSI and NEC industry standard compliant",
              "Full-service provider covering commercial, residential, and underground",
              "Certified fiber optic splicing and testing capabilities",
              "Safety and security first approach for every project",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-5 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCTA />
    </>
  );
}
