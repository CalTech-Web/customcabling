import { Metadata } from "next";
import { Network } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Structured Cabling - Custom Cabling Solutions",
  description:
    "Professional Cat5e, Cat6, and Cat6a structured cabling installation with testing and certification. BICSI and NEC compliant.",
};

export default function StructuredCablingPage() {
  return (
    <ServicePageLayout
      icon={Network}
      title="Structured Cabling"
      description="Professional installation of Cat5e, Cat6, and Cat6a cabling systems for commercial and residential buildings. Every run is tested and certified to BICSI and NEC standards."
      features={[
        "Cat5e, Cat6, and Cat6a cable installation",
        "Cable management and pathway systems",
        "MDF and IDF build-outs",
        "Rack and patch panel installation",
        "Cable testing and certification",
        "Labeling and documentation",
        "New construction and retrofit projects",
      ]}
    />
  );
}
