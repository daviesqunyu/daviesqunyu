import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
  tags: string[];
  img?: string;
};

const roles: Role[] = [
  {
    title: "Founder & Manager",
    org: "D&V Technologies",
    location: "Nairobi, Kenya",
    dates: "2025 – Present",
    tags: ["Leadership", "Web Dev", "Cloudflare", "Client Delivery"],
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=200&fit=crop",
    bullets: [
      "Lead end-to-end project delivery: client acquisition, requirements analysis, solution design, development, and deployment.",
      "Oversee website + domain operations, including Cloudflare workflows and professional domain services.",
      "Build client communication systems and produce professional proposals and reports."
    ]
  },
  {
    title: "ICT Intern",
    org: "Postal Corporation of Kenya (PCK Posta)",
    location: "GPO, Nairobi",
    dates: "May 2024 – Aug 2024",
    tags: ["Networking", "Cybersecurity", "Enterprise IT", "Helpdesk"],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=200&fit=crop",
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
    tags: ["Cabling", "Wi-Fi", "Routers", "Client Support"],
    img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=200&fit=crop",
    bullets: [
      "Set up and managed network infrastructure: cabling, routers, switches, access points.",
      "Deployed and optimized Wi-Fi networks for stable connectivity and performance.",
      "Diagnosed network faults and supported clients with basic security guidance."
    ]
  },
  {
    title: "Junior Systems & Security Analyst (Project-Based)",
    org: "Independent projects",
    location: "Remote",
    dates: "2025",
    tags: ["Pen Testing", "Auditing", "Documentation", "Web Security"],
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=200&fit=crop",
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
            <h1 className="h1">Hands-on, not theoretical.</h1>
            <p className="lead">
              I&apos;ve worked across real environments &mdash; field networking, enterprise ICT support, and startup delivery. I&apos;m
              strongest when reliability, security, and execution speed matter.
            </p>

            <div className="timeline" style={{ marginTop: 32 }}>
              {roles.map((r) => (
                <div className="timeline__item" key={r.title}>
                  <div className="timeline__dot" />
                  <div className="card card--img">
                    {r.img && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        className="card__cover"
                        src={r.img}
                        alt={r.org}
                        loading="lazy"
                        style={{ height: 140 }}
                      />
                    )}
                    <div className="card__body">
                      <h2 className="h3">{r.title}</h2>
                      <p className="p muted" style={{ marginTop: 4, fontSize: 14 }}>
                        {r.org} &middot; {r.location} &middot; {r.dates}
                      </p>
                      <ul className="p" style={{ marginTop: 10, paddingLeft: 18, lineHeight: 1.85 }}>
                        {r.bullets.map((b) => (
                          <li key={b} style={{ marginBottom: 6 }}>{b}</li>
                        ))}
                      </ul>
                      <div className="tagRow">
                        {r.tags.map((t) => (
                          <span className="tag" key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="panel" style={{ marginTop: 22 }}>
              <div className="panel__pad">
                <h2 className="h2">Next steps</h2>
                <p className="p" style={{ marginTop: 10 }}>
                  If you&apos;re hiring for cybersecurity, software engineering, data/AI, or network-focused roles, I&apos;d love to
                  learn what you&apos;re building.
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
