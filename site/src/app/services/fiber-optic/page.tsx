import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fiber Optic Cabling | Custom Cabling Solutions",
  description:
    "Certified fiber optic installation, fusion splicing, and OTDR testing in Atlanta and North Georgia. Single-mode and multi-mode fiber specialists.",
  alternates: { canonical: "/services/fiber-optic" },
  openGraph: {
    title: "Fiber Optic Cabling | Custom Cabling Solutions",
    description:
      "Certified fiber optic installation, fusion splicing, and OTDR testing in Atlanta and North Georgia. Single-mode and multi-mode fiber specialists.",
    url: "https://customcablingsolutions.com/services/fiber-optic",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fiber Optic Cabling | Custom Cabling Solutions",
    description:
      "Certified fiber optic installation, fusion splicing, and OTDR testing in Atlanta and North Georgia. Single-mode and multi-mode fiber specialists.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fiber Optic Installation & Splicing",
  description:
    "Certified fiber optic installation, fusion splicing, and OTDR testing in Atlanta and North Georgia. Single-mode and multi-mode fiber specialists.",
  url: "https://customcablingsolutions.com/services/fiber-optic",
  provider: { "@type": "LocalBusiness", name: "Custom Cabling Solutions", url: "https://customcablingsolutions.com" },
  areaServed: "Greater Atlanta Metropolitan Area, Georgia",
  serviceType: "Fiber Optic Installation",
};

export default function FiberOpticPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <ServicePageLayout
      iconName="Cable"
      title="Fiber Optic Installation & Splicing in Georgia"
      description="Certified fiber optic installation and splicing for businesses across the greater Atlanta metro. Serving Gainesville, Gwinnett County, Roswell, Athens, and all of North Georgia - from fiber pulling to fusion splicing and OTDR testing and certification."
      features={[
        "Single-mode and multi-mode fiber installation",
        "Fiber blowing and pulling",
        "Fusion splicing with certified equipment",
        "OTDR testing and certification",
        "Fiber patch panel and enclosure installation",
        "Building-to-building fiber runs across Georgia campuses",
        "Underground fiber optic installation",
      ]}
    />
    </>
  );
}
