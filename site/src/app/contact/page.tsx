import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Cabling Quote in Georgia | Custom Cabling Solutions",
  description:
    "Get a free quote for your cabling project. Call (678) 551-0952 or fill out our contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 bg-background">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Get a <span className="text-accent">Free Quote</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tell us about your project and we will get back to you with a custom
              cabling plan tailored to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200 group">
                <Phone className="w-6 h-6 text-accent mb-3" />
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <a
                  href="tel:6785510952"
                  className="text-gray-400 hover:text-accent-light transition-colors"
                >
                  (678) 551-0952
                </a>
              </div>

              <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200 group">
                <Mail className="w-6 h-6 text-accent mb-3" />
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <a
                  href="mailto:info@customcablingsolutions.com"
                  className="text-gray-400 hover:text-accent-light transition-colors text-sm"
                >
                  info@customcablingsolutions.com
                </a>
              </div>

              <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200 group">
                <MapPin className="w-6 h-6 text-accent mb-3" />
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-400 text-sm">
                  6303 Crest Village Circle
                  <br />
                  Flowery Branch, GA 30542
                </p>
              </div>

              <div className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-200 group">
                <Clock className="w-6 h-6 text-accent mb-3" />
                <h3 className="text-white font-semibold mb-1">Service Area</h3>
                <p className="text-gray-400 text-sm">
                  Greater Atlanta metro including Gainesville, Roswell, Athens, and
                  Gwinnett County
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-xl bg-surface border border-border">
                <h2 className="text-xl font-bold text-white mb-6">
                  Request a Quote
                </h2>
                <ContactForm source="free-quote" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
