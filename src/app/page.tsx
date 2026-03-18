import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Code2, Shield, Network, Database, Cpu, Smartphone } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TechOrbit } from "@/components/TechOrbit";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "End-to-end web and mobile applications with React, Node, TypeScript, Java, Kotlin, and PHP."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Security assessments, ethical testing, threat modeling, and hardened system architectures."
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    desc: "Enterprise and SMB network setup, troubleshooting, Wi-Fi optimization, and ISP support."
  },
  {
    icon: Database,
    title: "Data & AI / ML",
    desc: "Data analysis, visualization, machine learning models, and AI-powered system design."
  },
  {
    icon: Cpu,
    title: "Blockchain",
    desc: "Smart contract development, decentralized applications, and cryptographic system design."
  },
  {
    icon: Smartphone,
    title: "Android Development",
    desc: "Native Android apps with Kotlin/Java, Firebase integration, and Google Maps APIs."
  }
];

const stats = [
  { number: "3+", label: "Years experience" },
  { number: "10+", label: "Projects shipped" },
  { number: "6", label: "Specializations" },
  { number: "BSc", label: "Computer Science" }
];

const featuredProjects = [
  {
    title: "Blockchain Digital Voting System",
    desc: "Final year project focused on integrity, transparency, auditability, and fraud prevention using smart contracts.",
    tags: ["Solidity", "Ethereum", "Web3", "Cryptography"],
    href: "https://github.com/daviesqunyu/VOTING",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=340&fit=crop"
  },
  {
    title: "Bridan Design Build",
    desc: "Active client project under D&V Technologies: web presence, lead capture, and ongoing maintenance.",
    tags: ["WordPress", "Cloudflare", "Analytics", "UX"],
    href: "https://github.com/daviesqunyu/bridandesignbuild",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=340&fit=crop"
  },
  {
    title: "AI Smart Traffic Control",
    desc: "Traffic simulation + decisioning work: analysis-ready data and ML-driven optimization thinking.",
    tags: ["Python", "ML", "Data", "Maps"],
    href: "https://github.com/daviesqunyu/Nairobi-app-TLCS-Traffic-Lights-Control-System.git",
    img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=600&h=340&fit=crop"
  }
];

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="content" className="main">
        {/* ─── Hero ─── */}
        <section className="section">
          <div className="shell grid">
            <div>
              <p className="kicker">
                <span className="dot" aria-hidden="true" />
                Nairobi, Kenya &middot; Open to opportunities
              </p>

              <h1 className="h1" data-i18n-key="hero.title">
                I build <span className="accent">secure</span>, <span className="accent">scalable</span>, and{" "}
                <span className="accent">useful</span> software across web, mobile, networks, and applied AI.
              </h1>

              <p className="lead" data-i18n-key="hero.lead">
                Computer Scientist &middot; Full-Stack Developer &middot; Network Engineer &middot; Cybersecurity &middot; Data Analysis &middot; Blockchain
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
                  <h2 className="h3">What I&apos;m focused on</h2>
                  <p className="p" style={{ marginTop: 10 }}>
                    Security-minded engineering: clean APIs, reliable infrastructure, measurable performance, and
                    practical ML systems that keep working after launch.
                  </p>
                </div>
                <div className="divider" />
                <div className="panel__pad">
                  <p className="p muted">
                    Founder &amp; Manager, <span className="accent">D&amp;V Technologies</span> (2025 &ndash; Present) &middot; ICT Intern at
                    PCK Posta (May &ndash; Aug 2024) &middot; ISP Network Support (Apr 2022 &ndash; Jan 2023)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="statGrid">
              {stats.map((s) => (
                <div className="stat" key={s.label}>
                  <div className="stat__number">{s.number}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Services ─── */}
        <section className="section">
          <div className="shell">
            <h2 className="h2">What I offer</h2>
            <p className="p" style={{ marginTop: 10 }}>
              End-to-end delivery across six core disciplines &mdash; from concept to deployment to maintenance.
            </p>

            <div className="cardGrid" style={{ marginTop: 22 }}>
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article className="card" key={s.title}>
                    <div className="row">
                      <Icon size={20} aria-hidden="true" />
                      <div className="brand__name" style={{ fontSize: 16 }}>{s.title}</div>
                    </div>
                    <p className="p" style={{ marginTop: 10 }}>{s.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Featured projects ─── */}
        <section className="section">
          <div className="shell">
            <h2 className="h2">Featured projects</h2>
            <p className="p" style={{ marginTop: 10 }}>
              A small set that shows range &mdash; product build, systems thinking, and security.
            </p>

            <div className="cardGrid" style={{ marginTop: 22 }}>
              {featuredProjects.map((p) => (
                <article className="card card--img" key={p.title}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="card__cover" src={p.img} alt={p.title} loading="lazy" />
                  <div className="card__body">
                    <h3 className="h3">{p.title}</h3>
                    <p className="p" style={{ marginTop: 10 }}>{p.desc}</p>
                    <div className="tagRow">
                      {p.tags.map((t) => (
                        <span className="tag" key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="row" style={{ marginTop: 12 }}>
                      <a className="btn" href={p.href} target="_blank" rel="noreferrer">
                        Repo <ArrowRight size={18} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="row" style={{ marginTop: 16 }}>
              <Link className="btn btn--ghost" href="/projects">
                See all projects <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Tech Stack ─── */}
        <section className="section">
          <div className="shell">
            <h2 className="h2">Technology stack</h2>
            <p className="p" style={{ marginTop: 10 }}>
              Languages, frameworks, and tools I work with daily.
            </p>
            <div className="techStack" style={{ marginTop: 22 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://skillicons.dev/icons?i=react,typescript,javascript,html,css,tailwind,nodejs,php,laravel,express,kotlin,java,android,python,tensorflow,docker,git,linux,mysql,postgres,mongodb,firebase,solidity,ethereum&perline=12"
                alt="Technology stack icons"
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
