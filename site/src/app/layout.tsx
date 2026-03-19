import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custom Cabling Solutions | Georgia Cabling Contractor",
  description:
    "Georgia low-voltage cabling company since 2001. Commercial, residential, and underground cabling. BICSI and NEC compliant. Licensed and insured.",
  keywords:
    "cabling, structured cabling, fiber optic, low voltage, network, Georgia, Atlanta, data center, security cameras",
  metadataBase: new URL("https://customcablingsolutions.com"),
  verification: { google: "a62IAW9WXz-E1e5dnqS7SKQOD7JK-uvcENlXwgQa13k" },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Cabling Solutions | Georgia Cabling Contractor",
    description:
      "Georgia low-voltage cabling company since 2001. Commercial, residential, and underground cabling. BICSI and NEC compliant. Licensed and insured.",
    url: "https://customcablingsolutions.com",
    siteName: "Custom Cabling Solutions",
    locale: "en_US",
    type: "website",
    images: [{ url: "/logo.jpg", width: 400, height: 400, alt: "Custom Cabling Solutions" }],
  },
  twitter: {
    card: "summary",
    title: "Custom Cabling Solutions | Georgia Cabling Contractor",
    description:
      "Georgia low-voltage cabling company since 2001. Commercial, residential, and underground cabling. BICSI and NEC compliant. Licensed and insured.",
    images: ["/logo.jpg"],
  },
  other: {
    "theme-color": "#1e3a5f",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Custom Cabling Solutions",
  url: "https://customcablingsolutions.com",
  logo: "https://customcablingsolutions.com/logo.jpg",
  image: "https://customcablingsolutions.com/logo.jpg",
  telephone: "+1-678-551-0952",
  email: "info@customcablingsolutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6303 Crest Village Circle",
    addressLocality: "Flowery Branch",
    addressRegion: "GA",
    postalCode: "30542",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.1759,
    longitude: -83.9249,
  },
  description:
    "Georgia low-voltage cabling company since 2001. Commercial, residential, and underground cabling. BICSI and NEC compliant. Licensed and insured.",
  foundingDate: "2001",
  areaServed: [
    { "@type": "City", name: "Flowery Branch, GA" },
    { "@type": "City", name: "Gainesville, GA" },
    { "@type": "City", name: "Atlanta, GA" },
    { "@type": "City", name: "Roswell, GA" },
    { "@type": "City", name: "Athens, GA" },
    { "@type": "AdministrativeArea", name: "Gwinnett County, GA" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cabling Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Structured Cabling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fiber Optic Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Center Build-Outs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Camera Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "VoIP Phone System Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audio Video Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wireless Networking" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Communications Cabling" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
