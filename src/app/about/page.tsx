import type { Metadata } from "next";
import { GraduationCap, Shield, Network, Code2, Languages } from "lucide-react";
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
            <p className="lead">
              I’m a results-driven Computer Science graduate (CUEA, 2025) with hands-on experience across software
              development, IT infrastructure, network administration, and cybersecurity practices.
            </p>

            <div className="cardGrid" style={{ marginTop: 22 }}>
              <div className="card">
                <div className="row">
                  <GraduationCap size={18} aria-hidden="true" />
                  <div className="brand__name">Education</div>
                </div>
                <p className="p" style={{ marginTop: 10 }}>
                  BSc Computer Science — Catholic University of Eastern Africa (Sept 2021 – Aug 2025). Second Upper Class
                  classification.
                </p>
              </div>

              <div className="card">
                <div className="row">
                  <Shield size={18} aria-hidden="true" />
                  <div className="brand__name">Cybersecurity</div>
                </div>
                <p className="p" style={{ marginTop: 10 }}>
                  Ethical hacking mindset, network security fundamentals, and web app security awareness. Comfortable with
                  Kali Linux tooling and disciplined documentation.
                </p>
              </div>

              <div className="card">
                <div className="row">
                  <Network size={18} aria-hidden="true" />
                  <div className="brand__name">Networking</div>
                </div>
                <p className="p" style={{ marginTop: 10 }}>
                  Real-world troubleshooting: cabling, routers/switches, Wi‑Fi deployment, IP addressing, and performance
                  stabilization for clients and enterprise environments.
                </p>
              </div>
            </div>

            <section className="section">
              <div className="shell" style={{ padding: 0 }}>
                <h2 className="h2">Core strengths</h2>
                <div className="cardGrid" style={{ marginTop: 14 }}>
                  <div className="card">
                    <div className="row">
                      <Code2 size={18} aria-hidden="true" />
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
                      <Shield size={18} aria-hidden="true" />
                      <div className="brand__name">Security-first thinking</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      I’m careful with access control, safe defaults, and clear trust boundaries. I like systems that are
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
                      <Languages size={18} aria-hidden="true" />
                      <div className="brand__name">Communication</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>
                      Clear technical writing, reporting, and stakeholder communication—useful in support roles and
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

