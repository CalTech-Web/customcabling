import { Metadata } from "next";
import { PhoneCall } from "lucide-react";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Digital/VOIP Phone Systems - Custom Cabling Solutions",
  description:
    "IP phone system installation, PBX configuration, and voice network cabling. System upgrades and migrations.",
};

export default function PhoneSystemsPage() {
  return (
    <ServicePageLayout
      icon={PhoneCall}
      title="Digital/VOIP Phone Systems"
      description="Modern phone system installation and cabling for businesses of all sizes. We install, configure, and support IP and VOIP phone solutions."
      features={[
        "IP phone system installation",
        "PBX configuration and programming",
        "Cabling for voice networks",
        "System upgrades and migrations",
        "Multi-line phone setups",
        "Voicemail and auto-attendant configuration",
        "Integration with existing network infrastructure",
      ]}
    />
  );
}
