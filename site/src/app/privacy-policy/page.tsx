import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Custom Cabling Solutions",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-6">
          <p>Last updated: March 2026</p>

          <h2 className="text-xl font-semibold text-white mt-8">Information We Collect</h2>
          <p>
            When you contact us through our website, we collect the information you
            provide - including your name, email address, phone number, and message
            content. We use this information solely to respond to your inquiry and
            provide our services.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">How We Use Your Information</h2>
          <p>
            We use the information you provide to respond to your requests, provide
            quotes, schedule consultations, and deliver our cabling services. We do not
            sell, rent, or share your personal information with third parties for
            marketing purposes.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information from
            unauthorized access, use, or disclosure. Contact form submissions are
            transmitted securely and stored with access limited to authorized personnel.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Cookies</h2>
          <p>
            Our website may use cookies and similar technologies to improve your browsing
            experience. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a
              href="mailto:info@customcablingsolutions.com"
              className="text-accent hover:text-accent-light"
            >
              info@customcablingsolutions.com
            </a>{" "}
            or call{" "}
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
