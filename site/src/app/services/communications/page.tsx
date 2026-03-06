import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Communications Cabling Contractor in Georgia | Custom Cabling Solutions",
  description:
    "Voice and data cabling, underground systems, and campus backbone connections in Atlanta and North Georgia. Licensed low-voltage cabling contractor.",
};

export default function CommunicationsPage() {
  return (
    <ServicePageLayout
      iconName="Radio"
      title="Communications Cabling Contractor in Georgia"
      description="Complete voice and data cabling infrastructure for businesses and campuses across the greater Atlanta metro. Serving Gainesville, Gwinnett County, Roswell, Athens, and all of North Georgia - underground systems, campus backbone, and building-to-building connections handled by a licensed low-voltage contractor."
      features={[
        "Voice and data network cabling",
        "Underground cabling systems",
        "Campus backbone cabling",
        "Building-to-building connections across Georgia",
        "Riser and backbone cable installation",
        "Outdoor-rated cable installation",
        "Conduit and pathway systems",
      ]}
    />
  );
}
