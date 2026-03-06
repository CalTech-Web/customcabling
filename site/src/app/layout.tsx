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
  title: "Custom Cabling Solutions - Communications Infrastructure & Technology Systems",
  description:
    "Georgia low-voltage cabling company since 2001. Commercial, residential, and underground cabling. BICSI and NEC compliant. Licensed and insured.",
  keywords:
    "cabling, structured cabling, fiber optic, low voltage, network, Georgia, Atlanta, data center, security cameras",
  metadataBase: new URL("https://customcablingsolutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Custom Cabling Solutions",
    description:
      "Leading the Way with Communications Infrastructure and Technology Systems",
    url: "https://customcablingsolutions.com",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
  other: {
    "theme-color": "#1e3a5f",
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
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
