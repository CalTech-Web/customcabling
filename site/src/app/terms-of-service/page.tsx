import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Custom Cabling Solutions",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-6">
          <p>Last updated: March 2026</p>

          <h2 className="text-xl font-semibold text-white mt-8">Agreement to Terms</h2>
          <p>
            By accessing and using the Custom Cabling Solutions website, you agree to be
            bound by these Terms of Service. If you do not agree with any part of these
            terms, please do not use our website.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Services</h2>
          <p>
            Custom Cabling Solutions provides communication infrastructure and technology
            system services including structured cabling, fiber optic installation, security
            camera systems, and related low-voltage cabling services. All services are
            subject to a separate service agreement or proposal.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Quotes and Estimates</h2>
          <p>
            Quotes and estimates provided through our website or consultations are
            subject to change based on site conditions and project scope. Final pricing
            is determined after an on-site assessment and detailed in a written proposal.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Intellectual Property</h2>
          <p>
            All content on this website - including text, images, logos, and design - is
            the property of Custom Cabling Solutions and may not be reproduced without
            written permission.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Limitation of Liability</h2>
          <p>
            Custom Cabling Solutions is not liable for any indirect, incidental, or
            consequential damages arising from the use of this website. Our liability for
            services rendered is limited to the terms outlined in individual service
            agreements.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
          <p>
            Questions about these Terms of Service can be directed to{" "}
            <a
              href="mailto:info@customcablingsolutions.com"
              className="text-accent hover:text-accent-light"
            >
              info@customcablingsolutions.com
            </a>{" "}
            or{" "}
            <a href="tel:6785510952" className="text-accent hover:text-accent-light">
              (678) 551-0952
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
