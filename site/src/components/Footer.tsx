import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { name: "Structured Cabling", href: "/services/structured-cabling" },
  { name: "Fiber Optic Cabling", href: "/services/fiber-optic" },
  { name: "Datacenter Build-Outs", href: "/services/datacenter" },
  { name: "Security Cameras", href: "/services/security-cameras" },
  { name: "Phone Systems", href: "/services/phone-systems" },
  { name: "Audio/Video", href: "/services/audio-video" },
  { name: "Wireless Networking", href: "/services/wireless" },
  { name: "Communications Cabling", href: "/services/communications" },
];

const industryLinks = [
  { name: "Commercial", href: "/industries" },
  { name: "Residential", href: "/industries" },
  { name: "Healthcare", href: "/industries" },
  { name: "Education", href: "/industries" },
  { name: "Government", href: "/industries" },
  { name: "Data Centers", href: "/industries" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Service", href: "/terms-of-service" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <div className="leading-tight">
                <span className="font-bold text-white">Custom Cabling</span>
                <span className="block text-xs text-accent-light -mt-0.5">Solutions</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading the way with communications infrastructure and technology systems since 2001.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="tel:6785510952" className="flex items-center gap-2 hover:text-accent-light transition-colors">
                <Phone className="w-4 h-4 text-accent" /> (678) 551-0952
              </a>
              <a
                href="mailto:info@customcablingsolutions.com"
                className="flex items-center gap-2 hover:text-accent-light transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" /> info@customcablingsolutions.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>6303 Crest Village Circle, Flowery Branch, GA 30542</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href + link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-accent-light transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; 2001-2026 Custom Cabling Solutions - All Rights Reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-light transition-colors"
            >
              CalTech Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
