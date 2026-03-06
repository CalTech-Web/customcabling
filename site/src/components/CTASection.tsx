import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free consultation and let us design a cabling solution tailored
          to your building and requirements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white px-8 py-3.5 rounded-lg font-semibold transition-colors text-lg"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="tel:6785510952"
            className="inline-flex items-center justify-center gap-2 border border-accent/30 hover:border-accent text-accent-light px-8 py-3.5 rounded-lg font-semibold transition-colors text-lg"
          >
            <Phone className="w-5 h-5" /> (678) 551-0952
          </a>
        </div>
      </div>
    </section>
  );
}
