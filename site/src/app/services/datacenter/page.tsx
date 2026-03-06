import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Data Center Cabling & Build-Outs in Georgia | Custom Cabling Solutions",
  description:
    "Complete data center cabling and build-outs in Atlanta, Gwinnett County, and North Georgia. Server racks, cable tray, and hot/cold aisle containment.",
  alternates: { canonical: "/services/datacenter" },
};

export default function DatacenterPage() {
  return (
    <ServicePageLayout
      iconName="Server"
      title="Data Center Cabling & Build-Outs in Georgia"
      description="Complete data center cabling infrastructure built from the ground up for businesses across the greater Atlanta metro. Serving Gwinnett County, Gainesville, Roswell, and North Georgia - we design and install the physical layer that keeps your data center running."
      features={[
        "Server rack installation and configuration",
        "Hot/cold aisle containment systems",
        "Cable tray and ladder rack systems",
        "Power distribution unit installation",
        "Structured cabling within data center environments",
        "Fiber backbone installation",
        "Cable management and labeling",
      ]}
    />
  );
}
