import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Security Camera Installation in Georgia | Custom Cabling Solutions",
  description:
    "Professional IP security camera installation for businesses and homes in Atlanta, Gainesville, and North Georgia. NVR/DVR setup and remote viewing.",
};

export default function SecurityCamerasPage() {
  return (
    <ServicePageLayout
      iconName="Camera"
      title="Security Camera Installation in Georgia"
      description="Protect your property with professionally installed IP camera systems serving the greater Atlanta area. We serve businesses and homeowners across Gainesville, Gwinnett County, Roswell, Athens, and all of North Georgia - from full cabling infrastructure to remote viewing configuration."
      features={[
        "IP camera installation and positioning",
        "NVR and DVR system setup",
        "Remote viewing and mobile access configuration",
        "Commercial surveillance systems for Georgia businesses",
        "Residential security camera systems",
        "Cabling infrastructure for camera networks",
        "System expansion and upgrades",
      ]}
    />
  );
}
