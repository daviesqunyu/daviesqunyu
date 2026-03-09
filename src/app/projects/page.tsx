import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Davis Kunyu across web platforms, data/AI, Android, and blockchain."
};

type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

const projects: Project[] = [
  {
    title: "Blockchain‑Based Digital Voting System",
    description:
      "Final year research project focused on transparency, integrity, voter anonymity, auditability, and fraud prevention using smart contracts and cryptographic concepts.",
    tags: ["Solidity", "Ethereum", "Web3", "Cryptography"],
    href: "https://github.com/daviesqunyu/VOTING"
  },
  {
    title: "Bridan Design Build (Client Project)",
    description:
      "Active engagement under D&V Technologies: web presence, lead capture, hosting/domain setup, and ongoing maintenance for a design‑build construction company.",
    tags: ["WordPress", "Cloudflare", "Analytics", "Maintenance"],
    href: "https://github.com/daviesqunyu/bridandesignbuild"
  },
  {
    title: "Traffic Lights Control System (TLCS)",
    description:
      "Web-based traffic management system with interactive maps and monitoring, designed around Nairobi CBD. Emphasis on visualization and data-ready flows.",
    tags: ["JavaScript", "PHP", "Google Maps API", "Web"],
    href: "https://github.com/daviesqunyu/Nairobi-app-TLCS-Traffic-Lights-Control-System.git"
  },
  {
    title: "TRAFFCO — Android Traffic Application",
    description:
      "Android application for traffic navigation and route guidance with Google Maps integration and real-time awareness.",
    tags: ["Android", "Java", "C++", "Google Maps"],
    href: "https://github.com/daviesqunyu/Traffic_app.git"
  },
  {
    title: "Hotel Management System (Web)",
    description:
      "Online hotel management system to support room management, booking workflows, and administrative control.",
    tags: ["PHP", "HTML/CSS", "JavaScript", "CRUD"]
  },
  {
    title: "Integrated Facility Management Data Analysis",
    description:
      "Data analysis project (facility management datasets: incidents, work orders, energy consumption). Summary statistics, trends, and recommendations.",
    tags: ["R", "Python", "Excel", "Reporting"]
  }
];

export default function ProjectsPage() {
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
              Projects
            </p>
            <h1 className="h1">Work that ships.</h1>
            <p className="lead">
              Projects across software engineering, security, data, and product delivery. I care about real constraints:
              time, reliability, and clarity.
            </p>

            <div className="cardGrid" style={{ marginTop: 22 }}>
              {projects.map((p) => (
                <article className="card" key={p.title}>
                  <h2 className="h2" style={{ fontSize: 22 }}>
                    {p.title}
                  </h2>
                  <p className="p" style={{ marginTop: 10 }}>
                    {p.description}
                  </p>
                  <div className="tagRow">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="row" style={{ marginTop: 12 }}>
                    {p.href ? (
                      <a className="btn" href={p.href} target="_blank" rel="noreferrer">
                        Repo <ExternalLink size={18} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="btn" aria-disabled="true" style={{ opacity: 0.7 }}>
                        Details on request
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="panel" style={{ marginTop: 16 }}>
              <div className="panel__pad">
                <h2 className="h2">Want a walkthrough?</h2>
                <p className="p" style={{ marginTop: 10 }}>
                  I can explain the architecture, trade-offs, and security model for any of these.
                </p>
                <div className="row" style={{ marginTop: 12 }}>
                  <Link className="btn btn--primary" href="/contact">
                    Contact <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a className="btn btn--ghost" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">
                    Browse GitHub <ArrowRight size={18} aria-hidden="true" />
                  </a>
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

