import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Structured Cabling Installation in Georgia | Custom Cabling Solutions",
  description:
    "Expert Cat5e, Cat6, and Cat6a structured cabling installation serving Atlanta, Gainesville, Gwinnett County, and North Georgia. Licensed, BICSI and NEC compliant since 2001.",
};

export default function StructuredCablingPage() {
  return (
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
  );
}
