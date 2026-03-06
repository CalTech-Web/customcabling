import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Structured Cabling Installation in Georgia | Custom Cabling Solutions",
  description:
    "Expert Cat5e, Cat6, and Cat6a installation in Atlanta, Gainesville, and North Georgia. Licensed, BICSI and NEC compliant cabling contractor since 2001.",
  alternates: { canonical: "/services/structured-cabling" },
  openGraph: {
    title: "Structured Cabling Installation in Georgia | Custom Cabling Solutions",
    description:
      "Expert Cat5e, Cat6, and Cat6a installation in Atlanta, Gainesville, and North Georgia. Licensed, BICSI and NEC compliant cabling contractor since 2001.",
    url: "https://customcablingsolutions.com/services/structured-cabling",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Structured Cabling Installation in Georgia | Custom Cabling Solutions",
    description:
      "Expert Cat5e, Cat6, and Cat6a installation in Atlanta, Gainesville, and North Georgia. Licensed, BICSI and NEC compliant cabling contractor since 2001.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Structured Cabling Installation",
  description:
    "Expert Cat5e, Cat6, and Cat6a installation in Atlanta, Gainesville, and North Georgia. Licensed, BICSI and NEC compliant cabling contractor since 2001.",
  url: "https://customcablingsolutions.com/services/structured-cabling",
  provider: { "@type": "LocalBusiness", name: "Custom Cabling Solutions", url: "https://customcablingsolutions.com" },
  areaServed: "Greater Atlanta Metropolitan Area, Georgia",
  serviceType: "Structured Cabling",
};

export default function StructuredCablingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageLayout
      iconName="Network"
      title="Structured Cabling Installation in Georgia"
      description="Georgia's trusted structured cabling contractor for Cat5e, Cat6, and Cat6a systems in commercial and residential buildings. Serving the greater Atlanta metro - including Gainesville, Gwinnett County, Roswell, and North Georgia - with every run tested and certified to BICSI and NEC standards."
      features={[
        "Cat5e, Cat6, and Cat6a cable installation",
        "Cable management and pathway systems",
        "MDF and IDF build-outs",
        "Rack and patch panel installation",
        "Cable testing and certification",
        "Labeling and documentation",
        "New construction and retrofit projects across the Atlanta metro",
      ]}
    />
    </>
  );
}
