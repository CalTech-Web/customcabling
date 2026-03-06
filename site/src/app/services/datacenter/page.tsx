import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Datacenter Build-Outs - Custom Cabling Solutions",
  description:
    "Complete datacenter cabling infrastructure including server racks, cable tray systems, and hot/cold aisle containment.",
};

export default function DatacenterPage() {
  return (
    <ServicePageLayout
      iconName="Server"
      title="Datacenter Build-Outs"
      description="Complete datacenter cabling infrastructure from the ground up. We design and install the physical layer that keeps your data moving."
      features={[
        "Server rack installation and configuration",
        "Hot/cold aisle containment systems",
        "Cable tray and ladder rack systems",
        "Power distribution unit installation",
        "Structured cabling within datacenter environments",
        "Fiber backbone installation",
        "Cable management and labeling",
      ]}
    />
  );
}
