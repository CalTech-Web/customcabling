import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "VoIP & Business Phone System Installation in Georgia | Custom Cabling Solutions",
  description:
    "IP and VoIP phone system installation and cabling for businesses across Atlanta, Gainesville, and North Georgia. PBX configuration, upgrades, and migrations.",
  alternates: { canonical: "/services/phone-systems" },
};

export default function PhoneSystemsPage() {
  return (
    <ServicePageLayout
      iconName="PhoneCall"
      title="VoIP & Business Phone System Installation in Georgia"
      description="Modern VoIP and IP phone system installation for businesses of all sizes across the greater Atlanta metro. Serving Gainesville, Gwinnett County, Roswell, and North Georgia - we install, configure, and support your entire voice network from cabling to PBX programming."
      features={[
        "IP and VoIP phone system installation",
        "PBX configuration and programming",
        "Cabling for voice networks",
        "System upgrades and migrations",
        "Multi-line phone setups for Georgia businesses",
        "Voicemail and auto-attendant configuration",
        "Integration with existing network infrastructure",
      ]}
    />
  );
}
