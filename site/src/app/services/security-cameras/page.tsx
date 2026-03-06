import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Security Camera Installation in Georgia | Custom Cabling Solutions",
  description:
    "Professional IP security camera installation for businesses and homes in Atlanta, Gainesville, and North Georgia. NVR/DVR setup and remote viewing.",
  alternates: { canonical: "/services/security-cameras" },
  openGraph: {
    title: "Security Camera Installation in Georgia | Custom Cabling Solutions",
    description:
      "Professional IP security camera installation for businesses and homes in Atlanta, Gainesville, and North Georgia. NVR/DVR setup and remote viewing.",
    url: "https://customcablingsolutions.com/services/security-cameras",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Security Camera Installation in Georgia | Custom Cabling Solutions",
    description:
      "Professional IP security camera installation for businesses and homes in Atlanta, Gainesville, and North Georgia. NVR/DVR setup and remote viewing.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Security Camera Installation",
  description:
    "Professional IP security camera installation for businesses and homes in Atlanta, Gainesville, and North Georgia. NVR/DVR setup and remote viewing.",
  url: "https://customcablingsolutions.com/services/security-cameras",
  provider: { "@type": "LocalBusiness", name: "Custom Cabling Solutions", url: "https://customcablingsolutions.com" },
  areaServed: "Greater Atlanta Metropolitan Area, Georgia",
  serviceType: "Security Camera Installation",
};

export default function SecurityCamerasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageLayout
      iconName="Camera"
      title="Security Camera Installation in Georgia"
      description="Protect your property with professionally installed IP camera systems serving the greater Atlanta area. We serve businesses and homeowners across Gainesville, Gwinnett County, Roswell, Athens, and all of North Georgia - from full cabling infrastructure to remote viewing configuration."
      features={[
        "IP camera installation and positioning",
        "NVR and DVR system setup",
        "Remote viewing and mobile access configuration",
        "Commercial surveillance systems for Georgia businesses",
        "Residential security camera systems",
        "Cabling infrastructure for camera networks",
        "System expansion and upgrades",
      ]}
    />
    </>
  );
}
