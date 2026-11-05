import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://davis.dvtechnologies.xyz"),
  title: "Davis Kunyu | Lead Software Developer",
  description:
    "Davis Kunyu Wamalwa, lead software developer in Nairobi. Web, systems, and AI — flight DK-2026.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Davis Kunyu | Lead Software Developer",
    description: "Web, systems, and AI from Nairobi.",
    url: "https://davis.dvtechnologies.xyz"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
