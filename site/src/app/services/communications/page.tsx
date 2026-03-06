import { Metadata } from "next";
import { Radio } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Communications Cabling - Custom Cabling Solutions",
  description:
    "Voice and data network cabling, underground systems, campus backbone, and building-to-building connections.",
};

export default function CommunicationsPage() {
  return (
    <ServicePageLayout
      icon={Radio}
      title="Communications Cabling"
      description="Complete voice and data cabling infrastructure including underground systems and campus backbone connections. We connect buildings and campuses with reliable communication lines."
      features={[
        "Voice and data network cabling",
        "Underground cabling systems",
        "Campus backbone cabling",
        "Building-to-building connections",
        "Riser and backbone cable installation",
        "Outdoor-rated cable installation",
        "Conduit and pathway systems",
      ]}
    />
  );
}
