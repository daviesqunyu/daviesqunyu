import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SkillsField3D } from "@/components/SkillsField3D";
import { TechOrbit } from "@/components/TechOrbit";

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="main">
        <section className="section">
          <div className="shell grid">
            <div>
              <p className="kicker">
                <span className="dot" aria-hidden="true" />
                Nairobi, Kenya · Open to opportunities
              </p>

              <h1 className="h1" data-i18n-key="hero.title">
                I build <span className="accent">secure</span>, <span className="accent">scalable</span>, and{" "}
                <span className="accent">useful</span> software across web, mobile, networks, and applied AI.
              </h1>

              <p className="lead" data-i18n-key="hero.lead">
                Computer Scientist · Full‑Stack Developer · Network Engineer · Cybersecurity · Data Analysis · Blockchain
              </p>

              <div className="row" style={{ marginTop: 18 }}>
                <Link className="btn btn--primary" href="/projects">
                  View projects <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link className="btn btn--ghost" href="/contact">
                  Contact <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>

              <div className="row" style={{ marginTop: 14 }}>
                <a className="btn" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">
                  <Github size={18} aria-hidden="true" /> GitHub
                </a>
                <a
                  className="btn"
                  href="https://www.linkedin.com/in/davis-kunyu-980673295/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} aria-hidden="true" /> LinkedIn
                </a>
                <a className="btn" href="mailto:daviskunyu@gmail.com">
                  <Mail size={18} aria-hidden="true" /> Email
                </a>
              </div>
            </div>

            <div>
              <TechOrbit />
              <div className="panel" style={{ marginTop: 14 }}>
                <div className="panel__pad">
                  <h2 className="h2">What I’m focused on</h2>
                  <p className="p" style={{ marginTop: 10 }}>
                    Security-minded engineering: clean APIs, reliable infrastructure, measurable performance, and
                    practical ML systems that keep working after launch.
                  </p>
                </div>
                <div className="divider" />
                <div className="panel__pad">
                  <p className="p muted">
                    Founder & Manager, <span className="accent">D&amp;V Technologies</span> (2025–Present) · ICT Intern at
                    PCK Posta (May–Aug 2024) · ISP Network Support (Apr 2022–Jan 2023)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <h2 className="h2">Featured projects</h2>
            <p className="p" style={{ marginTop: 10 }}>
              A small set that shows range—product build, systems thinking, and security.
            </p>

            <div className="cardGrid">
              <article className="card">
                <h3 className="h2" style={{ fontSize: 22 }}>
                  Blockchain Digital Voting System
                </h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Final year project focused on integrity, transparency, auditability, and fraud prevention using smart
                  contracts.
                </p>
                <div className="tagRow">
                  <span className="tag">Solidity</span>
                  <span className="tag">Ethereum</span>
                  <span className="tag">Web3</span>
                  <span className="tag">Cryptography</span>
                </div>
                <div className="row" style={{ marginTop: 12 }}>
                  <a className="btn" href="https://github.com/daviesqunyu/VOTING" target="_blank" rel="noreferrer">
                    Repo <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="card">
                <h3 className="h2" style={{ fontSize: 22 }}>
                  Bridan Design Build
                </h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Active client project under D&amp;V Technologies: web presence, lead capture, and ongoing maintenance.
                </p>
                <div className="tagRow">
                  <span className="tag">WordPress</span>
                  <span className="tag">Cloudflare</span>
                  <span className="tag">Analytics</span>
                  <span className="tag">UX</span>
                </div>
                <div className="row" style={{ marginTop: 12 }}>
                  <a className="btn" href="https://github.com/daviesqunyu/bridandesignbuild" target="_blank" rel="noreferrer">
                    Repo <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>

              <article className="card">
                <h3 className="h2" style={{ fontSize: 22 }}>
                  AI Smart Traffic Control
                </h3>
                <p className="p" style={{ marginTop: 10 }}>
                  Traffic simulation + decisioning work: analysis-ready data and ML-driven optimization thinking.
                </p>
                <div className="tagRow">
                  <span className="tag">Python</span>
                  <span className="tag">ML</span>
                  <span className="tag">Data</span>
                  <span className="tag">Maps</span>
                </div>
                <div className="row" style={{ marginTop: 12 }}>
                  <a
                    className="btn"
                    href="https://github.com/daviesqunyu/Nairobi-app-TLCS-Traffic-Lights-Control-System.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Repo <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </div>

            <div className="row" style={{ marginTop: 16 }}>
              <Link className="btn btn--ghost" href="/projects">
                See all projects <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell grid">
            <div>
              <h2 className="h2">Skills visualization</h2>
              <p className="p" style={{ marginTop: 10 }}>
                A lightweight 3D “skill field” (runs locally) to make the site feel alive—without sacrificing readability.
              </p>
              <p className="p muted" style={{ marginTop: 10 }}>
                Tip: click the floating AI button to ask questions about my background and projects.
              </p>
            </div>
            <div>
              <SkillsField3D />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

