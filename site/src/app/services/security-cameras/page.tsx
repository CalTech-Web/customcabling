import { Metadata } from "next";
import { Camera } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Security Cameras - Custom Cabling Solutions",
  description:
    "Professional IP security camera installation for commercial and residential properties. NVR setup and remote viewing.",
};

export default function SecurityCamerasPage() {
  return (
    <ServicePageLayout
      icon={Camera}
      title="Security Cameras"
      description="Protect your property with professionally installed IP camera systems. We handle the full setup from cabling to remote viewing configuration."
      features={[
        "IP camera installation and positioning",
        "NVR and DVR system setup",
        "Remote viewing and mobile access configuration",
        "Commercial surveillance systems",
        "Residential security camera systems",
        "Cabling infrastructure for camera networks",
        "System expansion and upgrades",
      ]}
    />
  );
}
