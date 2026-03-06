import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsCTA from "@/components/TestimonialsCTA";
import PartnersSection from "@/components/PartnersSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <ServicesSection />
      <div className="section-divider" />
      <ProcessSection />
      <div className="section-divider" />
      <TestimonialsCTA />
      <div className="section-divider" />
      <PartnersSection />
      <div className="section-divider" />
      <FAQSection />
    </>
  );
}
