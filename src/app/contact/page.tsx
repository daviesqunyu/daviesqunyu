import type { Metadata } from "next";
import { Github, Linkedin, Mail, Phone, ArrowRight, Download, MapPin } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Davis Kunyu — email, LinkedIn, GitHub, and phone."
};

export default function ContactPage() {
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
              Contact
            </p>
            <h1 className="h1">Let&apos;s build something that lasts.</h1>
            <p className="lead">
              Fastest is email. If you&apos;re hiring, include the role, stack, location/timezone, and what &ldquo;success&rdquo; means in
              the first 60&ndash;90 days.
            </p>

            <div className="cardGrid" style={{ marginTop: 22 }}>
              <div className="card">
                <div className="row">
                  <Mail size={20} aria-hidden="true" />
                  <div className="brand__name">Email</div>
                </div>
                <p className="p" style={{ marginTop: 10 }}>
                  <a className="accent" href="mailto:daviskunyu@gmail.com">
                    daviskunyu@gmail.com
                  </a>
                </p>
                <div className="row" style={{ marginTop: 12 }}>
                  <a
                    className="btn btn--primary"
                    href="mailto:daviskunyu@gmail.com?subject=Hello%20Davis%20%E2%80%94%20%5BRole%2FProject%5D"
                  >
                    Email me <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="row">
                  <Linkedin size={20} aria-hidden="true" />
                  <div className="brand__name">LinkedIn</div>
                </div>
                <p className="p" style={{ marginTop: 10 }}>
                  <a
                    className="accent"
                    href="https://www.linkedin.com/in/davis-kunyu-980673295/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Davis Kunyu
                  </a>
                </p>
                <div className="row" style={{ marginTop: 12 }}>
                  <a
                    className="btn btn--ghost"
                    href="https://www.linkedin.com/in/davis-kunyu-980673295/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open profile <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="card">
                <div className="row">
                  <Github size={20} aria-hidden="true" />
                  <div className="brand__name">GitHub</div>
                </div>
                <p className="p" style={{ marginTop: 10 }}>
                  <a className="accent" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">
                    @daviesqunyu
                  </a>
                </p>
                <div className="row" style={{ marginTop: 12 }}>
                  <a className="btn btn--ghost" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">
                    Browse repos <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="cardGrid" style={{ marginTop: 14, gridTemplateColumns: "1fr 1fr" }}>
              <div className="panel">
                <div className="panel__pad">
                  <div className="row">
                    <Phone size={20} aria-hidden="true" />
                    <h2 className="h3">Phone</h2>
                  </div>
                  <p className="p" style={{ marginTop: 10 }}>
                    <a className="accent" href="tel:+254759075816">
                      +254 759 075 816
                    </a>
                  </p>
                  <p className="p muted" style={{ marginTop: 8, fontSize: 13 }}>
                    For D&amp;V Technologies work, start with email &mdash; I&apos;ll route it correctly.
                  </p>
                </div>
              </div>

              <div className="panel">
                <div className="panel__pad">
                  <div className="row">
                    <MapPin size={20} aria-hidden="true" />
                    <h2 className="h3">Location</h2>
                  </div>
                  <p className="p" style={{ marginTop: 10 }}>
                    <span className="accent">Nairobi, Kenya</span>
                  </p>
                  <p className="p muted" style={{ marginTop: 8, fontSize: 13 }}>
                    Open to remote, hybrid, and on-site roles within Kenya and internationally.
                  </p>
                </div>
              </div>
            </div>

            {/* Resume / CTA */}
            <div className="panel" style={{ marginTop: 22 }}>
              <div className="panel__pad" style={{ textAlign: "center", padding: "28px 18px" }}>
                <h2 className="h2">Want my resume?</h2>
                <p className="p" style={{ marginTop: 10, marginInline: "auto" }}>
                  Download my CV or reach out directly. I&apos;m happy to share more details about my experience and projects.
                </p>
                <div className="row" style={{ marginTop: 16, justifyContent: "center" }}>
                  <a className="btn btn--primary" href="mailto:daviskunyu@gmail.com?subject=Resume%20Request">
                    <Download size={16} aria-hidden="true" /> Request resume
                  </a>
                  <a className="btn btn--ghost" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">
                    View GitHub <ArrowRight size={18} aria-hidden="true" />
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
