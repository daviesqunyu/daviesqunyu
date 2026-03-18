import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Shield, Network, Code2, Languages, Award, ArrowRight, Download } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Davis Kunyu — Computer Scientist, full-stack developer, network engineer, cybersecurity professional, and founder of D&V Technologies."
};

export default function AboutPage() {
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
              About me
            </p>
            <h1 className="h1">Engineering with security and clarity.</h1>

            {/* ─── Profile intro ─── */}
            <div className="grid" style={{ marginTop: 22, alignItems: "center" }}>
              <div>
                <p className="lead">
                  I&apos;m a results-driven Computer Science graduate (CUEA, 2025) with hands-on experience across software
                  development, IT infrastructure, network administration, and cybersecurity practices.
                </p>
                <p className="p" style={{ marginTop: 14 }}>
                  I founded D&amp;V Technologies to deliver real solutions &mdash; from web development and digital consulting
                  to domain management and IT support. I care about code that&apos;s secure by default,
                  systems that scale, and documentation that helps the next person.
                </p>
                <div className="row" style={{ marginTop: 18 }}>
                  <Link className="btn btn--primary" href="/contact">
                    Get in touch <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a className="btn btn--ghost" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">
                    <Download size={16} aria-hidden="true" /> Resume
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="avatar"
                  src="https://github.com/daviesqunyu.png"
                  alt="Davis Kunyu"
                  width={120}
                  height={120}
                />
                <div style={{ textAlign: "center" }}>
                  <div className="brand__name">Davis Kunyu</div>
                  <p className="p muted" style={{ fontSize: 14 }}>Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            {/* ─── Education ─── */}
            <section className="section" style={{ paddingBottom: 0 }}>
              <div style={{ padding: 0 }}>
                <h2 className="h2">Education</h2>
                <div className="cardGrid" style={{ marginTop: 14, gridTemplateColumns: "1fr 1fr" }}>
                  <div className="card">
                    <div className="row">
                      <GraduationCap size={20} aria-hidden="true" />
                      <div className="brand__name">BSc Computer Science</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      Catholic University of Eastern Africa (Sept 2021 &ndash; Aug 2025).
                      Second Class Upper Division.
                    </p>
                    <div className="tagRow">
                      <span className="tag">Algorithms</span>
                      <span className="tag">Networks</span>
                      <span className="tag">Security</span>
                      <span className="tag">Databases</span>
                      <span className="tag">AI/ML</span>
                    </div>
                  </div>

                  <div className="card">
                    <div className="row">
                      <Award size={20} aria-hidden="true" />
                      <div className="brand__name">Certifications &amp; Training</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      Ethical hacking methodology, Kali Linux tooling, network security fundamentals,
                      and web application security awareness through hands-on practice and enterprise exposure at PCK Posta.
                    </p>
                    <div className="tagRow">
                      <span className="tag">Ethical Hacking</span>
                      <span className="tag">Kali Linux</span>
                      <span className="tag">Nmap</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── Core strengths ─── */}
            <section className="section">
              <div style={{ padding: 0 }}>
                <h2 className="h2">Core strengths</h2>
                <div className="cardGrid" style={{ marginTop: 14 }}>
                  <div className="card">
                    <div className="row">
                      <Code2 size={20} aria-hidden="true" />
                      <div className="brand__name">Software development</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      Java, Kotlin, Python, PHP, TypeScript/JavaScript, C++. Strong OOP, debugging, and Git discipline.
                    </p>
                    <div className="tagRow">
                      <span className="tag">React</span>
                      <span className="tag">Node</span>
                      <span className="tag">Android</span>
                      <span className="tag">REST</span>
                    </div>
                  </div>

                  <div className="card">
                    <div className="row">
                      <Shield size={20} aria-hidden="true" />
                      <div className="brand__name">Security-first thinking</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      Careful with access control, safe defaults, and clear trust boundaries. I like systems that are
                      resilient and easy to audit.
                    </p>
                    <div className="tagRow">
                      <span className="tag">Threat modeling</span>
                      <span className="tag">Least privilege</span>
                      <span className="tag">Hardening</span>
                    </div>
                  </div>

                  <div className="card">
                    <div className="row">
                      <Network size={20} aria-hidden="true" />
                      <div className="brand__name">Networking</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      Real-world troubleshooting: cabling, routers/switches, Wi-Fi deployment, IP addressing, and performance
                      stabilization for clients and enterprise environments.
                    </p>
                    <div className="tagRow">
                      <span className="tag">TCP/IP</span>
                      <span className="tag">Wi-Fi</span>
                      <span className="tag">Routing</span>
                    </div>
                  </div>

                  <div className="card">
                    <div className="row">
                      <Languages size={20} aria-hidden="true" />
                      <div className="brand__name">Communication</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      Clear technical writing, reporting, and stakeholder communication &mdash; useful in support roles and
                      product delivery.
                    </p>
                    <div className="tagRow">
                      <span className="tag">English</span>
                      <span className="tag">Swahili</span>
                      <span className="tag">Kibukusu</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── Tech logos ─── */}
            <div className="techStack">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=react,typescript,javascript,nodejs,python,java,kotlin,php,solidity,docker,git,linux&perline=12"
                alt="Core technology logos"
                loading="lazy"
                style={{ display: "inline", maxWidth: "100%" }}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
