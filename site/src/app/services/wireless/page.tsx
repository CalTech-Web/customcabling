import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Enterprise WiFi Installation in Georgia | Custom Cabling Solutions",
  description:
    "Enterprise Wi-Fi deployment and access point installation in Atlanta, Gainesville, Gwinnett County, and North Georgia. Site surveys and network optimization.",
};

export default function WirelessPage() {
  return (
    <ServicePageLayout
      iconName="Wifi"
      title="Enterprise WiFi Installation in Georgia"
      description="Reliable wireless coverage for facilities across the greater Atlanta metro. We design, deploy, and optimize enterprise Wi-Fi networks for businesses in Gainesville, Gwinnett County, Roswell, Athens, and all of North Georgia - built on a solid cabling foundation."
      features={[
        "Enterprise Wi-Fi network deployment",
        "Access point installation and configuration",
        "Site surveys and heat mapping",
        "Network optimization and troubleshooting",
        "Cabling infrastructure for wireless access points",
        "Guest network setup",
        "Scalable designs for growing Georgia businesses",
      ]}
    />
  );
}
