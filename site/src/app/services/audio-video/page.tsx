import { Metadata } from "next";
import { Speaker } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Audio/Video Distribution - Custom Cabling Solutions",
  description:
    "Home theater installation, commercial AV systems, conference room setup, and multi-room audio distribution.",
};

export default function AudioVideoPage() {
  return (
    <ServicePageLayout
      icon={Speaker}
      title="Audio/Video Distribution"
      description="Professional audio and video system installation for homes and businesses. From home theaters to full conference room AV setups."
      features={[
        "Home theater design and installation",
        "Commercial AV systems",
        "Conference room setup with video and audio",
        "Multi-room audio distribution",
        "Display mounting and cabling",
        "HDMI, coax, and speaker wire installation",
        "AV control system integration",
      ]}
    />
  );
}
