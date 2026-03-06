import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Audio Video Installation in Georgia | Custom Cabling Solutions",
  description:
    "Professional home theater and commercial AV installation in Atlanta, Gainesville, and North Georgia. Conference room setup and multi-room audio distribution.",
};

export default function AudioVideoPage() {
  return (
    <ServicePageLayout
      iconName="Speaker"
      title="Audio Video Installation in Georgia"
      description="Professional audio and video system installation for homes and businesses across the greater Atlanta metro. From home theaters in Gainesville and Gwinnett County to commercial AV and conference room setups in Roswell, Athens, and all of North Georgia."
      features={[
        "Home theater design and installation",
        "Commercial AV systems for Georgia businesses",
        "Conference room setup with video and audio",
        "Multi-room audio distribution",
        "Display mounting and cabling",
        "HDMI, coax, and speaker wire installation",
        "AV control system integration",
      ]}
    />
  );
}
