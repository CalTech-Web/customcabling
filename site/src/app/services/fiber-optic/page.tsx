import { Metadata } from "next";
import { Cable } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fiber Optic Cabling & Splicing - Custom Cabling Solutions",
  description:
    "Single-mode and multi-mode fiber optic installation, fusion splicing, and OTDR testing. Certified fiber optic specialists.",
};

export default function FiberOpticPage() {
  return (
    <ServicePageLayout
      icon={Cable}
      title="Fiber Optic Cabling & Splicing"
      description="Certified fiber optic installation for high-speed, long-distance data transmission. We handle everything from fiber pulling to fusion splicing and OTDR testing."
      features={[
        "Single-mode and multi-mode fiber installation",
        "Fiber blowing and pulling",
        "Fusion splicing with certified equipment",
        "OTDR testing and certification",
        "Fiber patch panel and enclosure installation",
        "Building-to-building fiber runs",
        "Underground fiber optic installation",
      ]}
    />
  );
}
