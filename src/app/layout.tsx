import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DM Labs | Official Corporate Portal — Technology, Creativity & Innovation",
  description: "DM Labs delivers innovative technology solutions, custom software development, digital brand experiences, enterprise networking, CCTV security, and professional ICT services.",
  keywords: [
    "DM Labs",
    "software development",
    "networking solutions",
    "ICT consultancy",
    "IT support",
    "CCTV security",
    "web development",
    "cloud transformation"
  ],
  authors: [{ name: "DM Labs" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/brand/dm-symbol.png",
  },
  openGraph: {
    title: "DM Labs | Technology. Creativity. Innovation.",
    description: "Transforming Ideas Into Scalable Digital Solutions for Enterprises, Institutions, and Startups.",
    url: "https://dmlabs.tech",
    siteName: "DM Labs",
    images: [
      {
        url: "/brand/logo-trimmed.png",
        width: 900,
        height: 220,
        alt: "DM Labs Official Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="bg-white text-dmdark-900 antialiased selection:bg-dmblue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
