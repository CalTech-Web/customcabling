import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Fiber Optic Installation & Splicing in Georgia | Custom Cabling Solutions",
  description:
    "Certified fiber optic installation, fusion splicing, and OTDR testing in Atlanta and North Georgia. Single-mode and multi-mode fiber specialists.",
};

export default function FiberOpticPage() {
  return (
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
  );
}
