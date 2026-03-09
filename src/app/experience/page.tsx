import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Cable, Shield, Users } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience timeline for Davis Kunyu — D&V Technologies founder/manager, ICT intern at Postal Corporation of Kenya, and network support work."
};

type Role = {
  title: string;
  org: string;
  location: string;
  dates: string;
  bullets: string[];
  icon: React.ReactNode;
};

const roles: Role[] = [
  {
    title: "Founder & Manager",
    org: "D&V Technologies",
    location: "Nairobi, Kenya",
    dates: "2025 – Present",
    icon: <Building2 size={18} aria-hidden="true" />,
    bullets: [
      "Lead end‑to‑end project delivery: client acquisition, requirements analysis, solution design, development, and deployment.",
      "Oversee website + domain operations, including Cloudflare workflows and professional domain services.",
      "Build client communication systems and produce professional proposals and reports."
    ]
  },
  {
    title: "ICT Intern",
    org: "Postal Corporation of Kenya (PCK Posta)",
    location: "GPO, Nairobi",
    dates: "May 2024 – Aug 2024",
    icon: <Users size={18} aria-hidden="true" />,
    bullets: [
      "Network troubleshooting across enterprise infrastructure; resolved connectivity issues and hardware faults.",
      "Hardware and software maintenance; support for Zimbra password resets, OS installs, and configuration.",
      "Exposure to cybersecurity practices and Kali Linux tools through security team sessions."
    ]
  },
  {
    title: "Network / Internet Service Support & Provider",
    org: "Field work (residential & SMB clients)",
    location: "Nairobi – Dagoretti",
    dates: "Apr 2022 – Jan 2023",
    icon: <Cable size={18} aria-hidden="true" />,
    bullets: [
      "Set up and managed network infrastructure: cabling, routers, switches, access points.",
      "Deployed and optimized Wi‑Fi networks for stable connectivity and performance.",
      "Diagnosed network faults and supported clients with basic security guidance."
    ]
  },
  {
    title: "Junior Systems & Security Analyst (Project‑Based / Simulated)",
    org: "Independent projects",
    location: "Remote",
    dates: "2025",
    icon: <Shield size={18} aria-hidden="true" />,
    bullets: [
      "Simulated security assessments and system audits for portfolio development.",
      "Documented vulnerabilities, risks, and mitigations aligned to industry best practices.",
      "Tested common web security issues (e.g., injection patterns, authentication weaknesses)."
    ]
  }
];

export default function ExperiencePage() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="main">
        <section className="section">
          <div className="shell">
            <p className="kicker">
              <span className="dot" aria-hidden="true" />
              Experience
            </p>
            <h1 className="h1">Hands‑on, not theoretical.</h1>
            <p className="lead">
              I’ve worked across real environments—field networking, enterprise ICT support, and startup delivery. I’m
              strongest when reliability, security, and execution speed matter.
            </p>

            <div className="cardGrid" style={{ marginTop: 22 }}>
              {roles.map((r) => (
                <article className="card" key={r.title}>
                  <div className="row">
                    {r.icon}
                    <div className="brand__name">
                      {r.title} · {r.org}
                    </div>
                  </div>
                  <p className="p muted" style={{ marginTop: 8 }}>
                    {r.location} · {r.dates}
                  </p>
                  <ul className="p" style={{ marginTop: 10, paddingLeft: 18, lineHeight: 1.8 }}>
                    {r.bullets.map((b) => (
                      <li key={b} style={{ marginBottom: 8 }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="panel" style={{ marginTop: 16 }}>
              <div className="panel__pad">
                <h2 className="h2">Next steps</h2>
                <p className="p" style={{ marginTop: 10 }}>
                  If you’re hiring for cybersecurity, software engineering, data/AI, or network-focused roles, I’d love to
                  learn what you’re building.
                </p>
                <div className="row" style={{ marginTop: 12 }}>
                  <Link className="btn btn--primary" href="/contact">
                    Contact <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link className="btn btn--ghost" href="/projects">
                    See projects <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

