import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "VoIP Phone Systems | Custom Cabling Solutions",
  description:
    "IP and VoIP phone system installation and cabling for businesses across Atlanta, Gainesville, and North Georgia. PBX configuration, upgrades, and migrations.",
  alternates: { canonical: "/services/phone-systems" },
  openGraph: {
    title: "VoIP Phone Systems | Custom Cabling Solutions",
    description:
      "IP and VoIP phone system installation and cabling for businesses across Atlanta, Gainesville, and North Georgia. PBX configuration, upgrades, and migrations.",
    url: "https://customcablingsolutions.com/services/phone-systems",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "VoIP Phone Systems | Custom Cabling Solutions",
    description:
      "IP and VoIP phone system installation and cabling for businesses across Atlanta, Gainesville, and North Georgia. PBX configuration, upgrades, and migrations.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "VoIP & Business Phone System Installation",
  description:
    "IP and VoIP phone system installation and cabling for businesses across Atlanta, Gainesville, and North Georgia. PBX configuration, upgrades, and migrations.",
  url: "https://customcablingsolutions.com/services/phone-systems",
  provider: { "@type": "LocalBusiness", name: "Custom Cabling Solutions", url: "https://customcablingsolutions.com" },
  areaServed: "Greater Atlanta Metropolitan Area, Georgia",
  serviceType: "VoIP Phone System Installation",
};

export default function PhoneSystemsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageLayout
      iconName="PhoneCall"
      title="VoIP & Business Phone System Installation in Georgia"
      description="Modern VoIP and IP phone system installation for businesses of all sizes across the greater Atlanta metro. Serving Gainesville, Gwinnett County, Roswell, and North Georgia - we install, configure, and support your entire voice network from cabling to PBX programming."
      features={[
        "IP and VoIP phone system installation",
        "PBX configuration and programming",
        "Cabling for voice networks",
        "System upgrades and migrations",
        "Multi-line phone setups for Georgia businesses",
        "Voicemail and auto-attendant configuration",
        "Integration with existing network infrastructure",
      ]}
    />
    </>
  );
}
