import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Davis Kunyu across software, data, mobile, and technology."
};

type Project = { title: string; description: string; tags: string[]; href?: string; image: string; alt: string; };

const projects: Project[] = [
  { title: "ElectraVote", description: "A voting-system project focused on secure, transparent voting workflows.", tags: ["Python", "Django", "PostgreSQL"], href: "https://github.com/daviesqunyu/ElectraVote", image: "/projects/electravote.svg", alt: "Local illustration for ElectraVote" },
  { title: "AI Health Chatbots", description: "Conversational chatbot work exploring patient assistance for health conditions.", tags: ["Python", "Flask", "AI"], href: "https://github.com/DavisK2/ai-health-chatbot", image: "/projects/health-chatbots.svg", alt: "Local illustration for AI Health Chatbots" },
  { title: "Hotel Management System", description: "Hotel booking and management software designed around operational workflows.", tags: ["Django", "Web application"], href: "https://github.com/DavisK2/hotel-management-django", image: "/projects/hotel-system.svg", alt: "Local illustration for Hotel Management System" },
  { title: "Flutter Task Manager", description: "A cross-platform task-management project with a mobile-first workflow.", tags: ["Flutter", "Dart", "Firebase"], href: "https://github.com/DavisK2/flutter-task-manager", image: "/projects/flutter-tasks.svg", alt: "Local illustration for Flutter Task Manager" },
  { title: "Traffic Control Simulation", description: "A simulation project exploring traffic flow and transport systems.", tags: ["Python", "Data", "Simulation"], href: "https://github.com/DavisK2/traffic-simulation", image: "/projects/traffic-simulation.svg", alt: "Local illustration for Traffic Control Simulation" },
  { title: "Dairy Farm Management", description: "A farm-operations project for livestock and milk-production information.", tags: ["Python", "SQLite"], href: "https://github.com/DavisK2/dairy-farm-management", image: "/projects/dairy-farm.svg", alt: "Local illustration for Dairy Farm Management" },
  { title: "Bridan Design Build", description: "A client web-presence project listed in my portfolio; view the repository for details.", tags: ["Web", "Client project"], href: "https://github.com/daviesqunyu/bridandesignbuild", image: "/projects/bridan-design.svg", alt: "Local illustration for Bridan Design Build" },
  { title: "Traffic Lights Control System", description: "A web-based traffic-management project with interactive maps and monitoring.", tags: ["JavaScript", "PHP", "Maps"], href: "https://github.com/daviesqunyu/Nairobi-app-TLCS-Traffic-Lights-Control-System", image: "/projects/traffic-lights.svg", alt: "Local illustration for Traffic Lights Control System" }
];

export default function ProjectsPage() {
  return <>
    <a className="skip" href="#content">Skip to content</a><SiteHeader />
    <main id="content" className="main"><section className="section"><div className="shell">
      <p className="kicker"><span className="dot" aria-hidden="true" />Project gallery</p>
      <h1 className="h1">Work that solves real problems.</h1>
      <p className="lead">Selected work across software engineering, mobile, data, and technology. Artwork is stored locally in this site, avoiding unreliable third-party image URLs. These are illustrations, not application screenshots.</p>
      <div className="cardGrid" style={{ marginTop: 22 }}>
        {projects.map((project) => <article className="card card--img" key={project.title}>
          <Image className="card__cover" src={project.image} alt={project.alt} width={1200} height={650} />
          <div className="card__body"><h2 className="h3">{project.title}</h2><p className="p" style={{ marginTop: 10 }}>{project.description}</p><div className="tagRow">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><div className="row" style={{ marginTop: 12 }}>{project.href ? <a className="btn" href={project.href} target="_blank" rel="noreferrer">View repository <ExternalLink size={18} aria-hidden="true" /></a> : <span className="btn" aria-disabled="true">Details on request</span>}</div></div>
        </article>)}
      </div>
      <div className="panel" style={{ marginTop: 22 }}><div className="panel__pad"><h2 className="h2">Want a walkthrough?</h2><p className="p" style={{ marginTop: 10 }}>I can discuss project context, design choices, and implementation details.</p><div className="row" style={{ marginTop: 12 }}><Link className="btn btn--primary" href="/contact">Contact <ArrowRight size={18} aria-hidden="true" /></Link><a className="btn btn--ghost" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">Browse GitHub <ArrowRight size={18} aria-hidden="true" /></a></div></div></div>
    </div></section></main><SiteFooter />
  </>;
}
