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
    "Georgia-based low-voltage cabling company specializing in commercial, residential, and underground cabling systems since 2001. BICSI and NEC compliant. Licensed and insured.",
  keywords:
    "cabling, structured cabling, fiber optic, low voltage, network, Georgia, Atlanta, data center, security cameras",
  openGraph: {
    title: "Custom Cabling Solutions",
    description:
      "Leading the Way with Communications Infrastructure and Technology Systems",
    url: "https://customcablingsolutions.com",
    siteName: "Custom Cabling Solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
