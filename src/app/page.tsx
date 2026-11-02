import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, Code2, Shield, Network, Database, Cpu, Smartphone } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { TechOrbit } from "@/components/TechOrbit";

const services = [
  { icon: Code2, title: "Software Development", desc: "Web and mobile applications built around practical needs, maintainable code, and clear user experiences." },
  { icon: Shield, title: "Cybersecurity", desc: "Security-minded development and an ongoing interest in web, application, and network security." },
  { icon: Network, title: "Networking & Infrastructure", desc: "Networking, systems, and IT infrastructure experience alongside software delivery." },
  { icon: Database, title: "Data & Analysis", desc: "Data analysis and database work to help make information useful and understandable." },
  { icon: Cpu, title: "Artificial Intelligence", desc: "Exploring applied AI and ways intelligent tools can support real-world workflows." },
  { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform mobile development and practical app experiences." }
];

const featuredProjects = [
  {
    title: "ElectraVote",
    desc: "A voting-system project focused on secure, transparent voting workflows.",
    tags: ["Python", "Django", "PostgreSQL"],
    href: "https://github.com/daviesqunyu/ElectraVote",
    image: "/projects/electravote.svg",
    alt: "Locally hosted illustration for the ElectraVote project"
  },
  {
    title: "AI Health Chatbots",
    desc: "Conversational chatbot work exploring patient assistance for health conditions.",
    tags: ["Python", "Flask", "AI"],
    href: "https://github.com/DavisK2/ai-health-chatbot",
    image: "/projects/health-chatbots.svg",
    alt: "Locally hosted illustration for AI health chatbot work"
  },
  {
    title: "Traffic Control Simulation",
    desc: "A simulation project exploring traffic flow and transport systems.",
    tags: ["Python", "Data", "Simulation"],
    href: "https://github.com/DavisK2/traffic-simulation",
    image: "/projects/traffic-simulation.svg",
    alt: "Locally hosted illustration for the traffic simulation project"
  }
];

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#content">Skip to content</a>
      <SiteHeader />
      <main id="content" className="main">
        <section className="section">
          <div className="shell grid">
            <div>
              <p className="kicker"><span className="dot" aria-hidden="true" />Nairobi, Kenya · Lead Software Developer</p>
              <h1 className="h1">I build <span className="accent">useful</span>, secure, and thoughtful software.</h1>
              <p className="lead">I’m Davis Kunyu Wamalwa, a Lead Software Developer at D&amp;V Technologies. My interests span software engineering, cybersecurity, data, AI, web development, and infrastructure.</p>
              <div className="row" style={{ marginTop: 18 }}>
                <Link className="btn btn--primary" href="/projects">Explore projects <ArrowRight size={18} aria-hidden="true" /></Link>
                <Link className="btn btn--ghost" href="/contact">Contact me <ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
              <div className="row" style={{ marginTop: 14 }}>
                <a className="btn" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer"><Github size={18} aria-hidden="true" /> GitHub</a>
                <a className="btn" href="https://www.linkedin.com/in/davis-kunyu-980673295/" target="_blank" rel="noreferrer"><Linkedin size={18} aria-hidden="true" /> LinkedIn</a>
                <a className="btn" href="mailto:daviskunyu@gmail.com"><Mail size={18} aria-hidden="true" /> daviskunyu@gmail.com</a>
              </div>
            </div>
            <div>
              <TechOrbit />
              <div className="panel" style={{ marginTop: 14 }}>
                <div className="panel__pad"><h2 className="h3">What I’m focused on</h2><p className="p" style={{ marginTop: 10 }}>Building dependable digital products with clear interfaces, maintainable foundations, and security-aware engineering.</p></div>
                <div className="divider" />
                <div className="panel__pad"><p className="p muted"><strong>Current role:</strong> Lead Software Developer at D&amp;V Technologies</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <h2 className="h2">A cross-disciplinary toolkit</h2>
            <p className="p" style={{ marginTop: 10 }}>I work across software, data, security, and infrastructure—bringing the right tools to the problem.</p>
            <div className="cardGrid" style={{ marginTop: 22 }}>
              {services.map(({ icon: Icon, title, desc }) => <article className="card" key={title}><div className="row"><Icon size={20} aria-hidden="true" /><div className="brand__name" style={{ fontSize: 16 }}>{title}</div></div><p className="p" style={{ marginTop: 10 }}>{desc}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <h2 className="h2">Selected projects</h2>
            <p className="p" style={{ marginTop: 10 }}>Project images are local illustrations so they load with the site; replace them with genuine screenshots when available.</p>
            <div className="cardGrid" style={{ marginTop: 22 }}>
              {featuredProjects.map((project) => <article className="card card--img" key={project.title}>
                <Image className="card__cover" src={project.image} alt={project.alt} width={1200} height={650} />
                <div className="card__body"><h3 className="h3">{project.title}</h3><p className="p" style={{ marginTop: 10 }}>{project.desc}</p><div className="tagRow">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="row" style={{ marginTop: 12 }}><a className="btn" href={project.href} target="_blank" rel="noreferrer">Repository <ArrowRight size={18} aria-hidden="true" /></a></div></div>
              </article>)}
            </div>
            <div className="row" style={{ marginTop: 16 }}><Link className="btn btn--ghost" href="/projects">See all projects <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
