import type { Metadata } from "next";
import { fraunces, instrumentSans } from "./typography";
import "./globals.css";
import { AssistantWidget } from "@/components/AssistantWidget";
import { HiddenTranslator } from "@/components/HiddenTranslator";

export const metadata: Metadata = {
  metadataBase: new URL("https://davis.dvtechnologies.xyz"),
  title: {
    default: "Davis Kunyu · Software Engineer",
    template: "%s · Davis Kunyu"
  },
  description:
    "Computer Scientist, Full‑Stack Software Developer, Network Engineer, Data Analyst, and Cybersecurity professional based in Nairobi, Kenya.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: "Davis Kunyu · Software Engineer",
    description: "Secure systems, clean UX, and practical AI—built to ship.",
    url: "https://davis.dvtechnologies.xyz"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <AssistantWidget />
        <HiddenTranslator />
      </body>
    </html>
  );
}

