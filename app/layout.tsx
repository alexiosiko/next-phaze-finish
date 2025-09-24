import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Next Phaze Finish - Professional Flooring Installation & Refinishing",
  description: "Transform your floors with Next Phaze Finish. Expert hardwood, laminate, and luxury vinyl installation, repairs, and custom finishes. Quality workmanship that stands the test of time.",
  keywords: "flooring, hardwood floors, laminate installation, luxury vinyl, floor refinishing, floor repairs, custom finishes",
  authors: [{ name: "Next Phaze Finish" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
