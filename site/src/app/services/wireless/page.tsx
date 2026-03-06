import { Metadata } from "next";
import { Wifi } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Wireless Networking Solutions - Custom Cabling Solutions",
  description:
    "Enterprise Wi-Fi deployment, access point installation, site surveys, and network optimization.",
};

export default function WirelessPage() {
  return (
    <ServicePageLayout
      icon={Wifi}
      title="Wireless Networking Solutions"
      description="Reliable wireless coverage for your entire facility. We design, deploy, and optimize enterprise Wi-Fi networks built on a solid cabling foundation."
      features={[
        "Enterprise Wi-Fi network deployment",
        "Access point installation and configuration",
        "Site surveys and heat mapping",
        "Network optimization and troubleshooting",
        "Cabling infrastructure for wireless access points",
        "Guest network setup",
        "Scalable designs for growing businesses",
      ]}
    />
  );
}
