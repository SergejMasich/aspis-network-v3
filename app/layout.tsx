import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://aspis-network-v3.vercel.app"),
  title: {
    default: "ASPIS Network",
    template: "%s · ASPIS Network",
  },
  description:
    "An immutable shield for your capital. Secure. Transparent. Adaptive.",
  applicationName: "ASPIS Network",

  alternates: {
    canonical: "/en",
    languages: {
      "en": "/en",
      "ru": "/ru",
    },
  },

  openGraph: {
    type: "website",
    siteName: "ASPIS Network",
    title: "ASPIS Network",
    description:
      "An immutable shield for your capital. Secure. Transparent. Adaptive.",
    url: "/en",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "ASPIS Network",
    description:
      "An immutable shield for your capital. Secure. Transparent. Adaptive.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
