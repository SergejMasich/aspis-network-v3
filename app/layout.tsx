import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASPIS Network",
  description: "An Immutable Shield for Your Capital",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen bg-black text-white antialiased">{children}</body>
    </html>
  );
}
