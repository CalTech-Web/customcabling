import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Communications Cabling | Custom Cabling Solutions",
  description:
    "Voice and data cabling, underground systems, and campus backbone connections in Atlanta and North Georgia. Licensed low-voltage cabling contractor.",
  alternates: { canonical: "/services/communications" },
  openGraph: {
    title: "Communications Cabling | Custom Cabling Solutions",
    description:
      "Voice and data cabling, underground systems, and campus backbone connections in Atlanta and North Georgia. Licensed low-voltage cabling contractor.",
    url: "https://customcablingsolutions.com/services/communications",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Communications Cabling | Custom Cabling Solutions",
    description:
      "Voice and data cabling, underground systems, and campus backbone connections in Atlanta and North Georgia. Licensed low-voltage cabling contractor.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Communications Cabling",
  description:
    "Voice and data cabling, underground systems, and campus backbone connections in Atlanta and North Georgia. Licensed low-voltage cabling contractor.",
  url: "https://customcablingsolutions.com/services/communications",
  provider: { "@type": "LocalBusiness", name: "Custom Cabling Solutions", url: "https://customcablingsolutions.com" },
  areaServed: "Greater Atlanta Metropolitan Area, Georgia",
  serviceType: "Communications Cabling",
};

export default function CommunicationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageLayout
      iconName="Radio"
      title="Communications Cabling Contractor in Georgia"
      description="Complete voice and data cabling infrastructure for businesses and campuses across the greater Atlanta metro. Serving Gainesville, Gwinnett County, Roswell, Athens, and all of North Georgia - underground systems, campus backbone, and building-to-building connections handled by a licensed low-voltage contractor."
      features={[
        "Voice and data network cabling",
        "Underground cabling systems",
        "Campus backbone cabling",
        "Building-to-building connections across Georgia",
        "Riser and backbone cable installation",
        "Outdoor-rated cable installation",
        "Conduit and pathway systems",
      ]}
    />
    </>
  );
}
