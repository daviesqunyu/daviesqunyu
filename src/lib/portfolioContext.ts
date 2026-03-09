export type PortfolioContext = {
  name: string;
  location: string;
  roles: string[];
  links: { label: string; href: string }[];
  contact: { email: string; phone: string; linkedin: string; github: string; website: string };
  summary: string;
  highlights: string[];
  experience: { title: string; org: string; dates: string; location: string; bullets: string[] }[];
  projects: { title: string; tags: string[]; bullets: string[]; repo?: string }[];
};

export const portfolioContext: PortfolioContext = {
  name: "Davis Kunyu",
  location: "Nairobi, Kenya",
  roles: [
    "Computer Scientist",
    "Full‑Stack Software Developer",
    "Network Engineer",
    "Cybersecurity Professional",
    "Data Analyst",
    "Blockchain Developer"
  ],
  contact: {
    email: "daviskunyu@gmail.com",
    phone: "+254759075816",
    linkedin: "https://www.linkedin.com/in/davis-kunyu-980673295/",
    github: "https://github.com/daviesqunyu",
    website: "https://dvtechnologies.xyz"
  },
  links: [
    { label: "GitHub", href: "https://github.com/daviesqunyu" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/davis-kunyu-980673295/" },
    { label: "Email", href: "mailto:daviskunyu@gmail.com" },
    { label: "Phone", href: "tel:+254759075816" },
    { label: "D&V Technologies", href: "https://dvtechnologies.xyz" }
  ],
  summary:
    "Results-driven Computer Science graduate with hands-on experience across software development, IT infrastructure, network administration, and cybersecurity practices. Founder/Manager of D&V Technologies, delivering web development, digital solutions, and ICT consulting.",
  highlights: [
    "Security-minded engineering: safe defaults, clear trust boundaries, disciplined reporting.",
    "Hands-on networking: Wi‑Fi deployments, cabling, routers/switches, troubleshooting.",
    "Full-stack delivery: requirements → build → deploy → maintain.",
    "Blockchain + applied systems: integrity, auditability, and real-world constraints."
  ],
  experience: [
    {
      title: "Founder & Manager",
      org: "D&V Technologies",
      dates: "2025 – Present",
      location: "Nairobi, Kenya",
      bullets: [
        "Lead end‑to‑end project delivery: acquisition, requirements, design, development, deployment.",
        "Oversee domains/email/Cloudflare operations and professional client communications.",
        "Write proposals, reports, and coordinate delivery for small-to-mid projects."
      ]
    },
    {
      title: "ICT Intern",
      org: "Postal Corporation of Kenya (PCK Posta)",
      dates: "May 2024 – Aug 2024",
      location: "GPO, Nairobi",
      bullets: [
        "Network troubleshooting and diagnosis across enterprise ICT infrastructure.",
        "Hardware/software maintenance and helpdesk support (including Zimbra resets).",
        "Practical exposure to Kali Linux, Nmap, and ethical testing methodology."
      ]
    },
    {
      title: "Network / Internet Service Support & Provider",
      org: "Field work (Residential & SMB clients)",
      dates: "Apr 2022 – Jan 2023",
      location: "Nairobi – Dagoretti",
      bullets: [
        "Configured routers/switches/APs and structured cabling for client networks.",
        "Optimized Wi‑Fi for stability and performance; resolved connectivity faults.",
        "Provided basic advisory support on network security and equipment usage."
      ]
    }
  ],
  projects: [
    {
      title: "Blockchain‑Based Digital Voting System",
      tags: ["Solidity", "Ethereum", "Web3", "Cryptography"],
      bullets: [
        "Designed a decentralized voting prototype focused on integrity and auditability.",
        "Implemented smart contract logic and cryptographic principles.",
        "Optimized for transparency and resistance to manipulation."
      ],
      repo: "https://github.com/daviesqunyu/VOTING"
    },
    {
      title: "Bridan Design Build (Client Project)",
      tags: ["WordPress", "Cloudflare", "Analytics", "Maintenance"],
      bullets: [
        "Built/maintain web presence and lead capture for a construction business.",
        "Handled hosting/domain management and ongoing support under D&V Technologies."
      ],
      repo: "https://github.com/daviesqunyu/bridandesignbuild"
    },
    {
      title: "Traffic Lights Control System (TLCS)",
      tags: ["JavaScript", "PHP", "Google Maps API", "Web"],
      bullets: [
        "Traffic visualization and monitoring concept built around Nairobi CBD.",
        "Interactive maps and data-ready workflows."
      ],
      repo: "https://github.com/daviesqunyu/Nairobi-app-TLCS-Traffic-Lights-Control-System.git"
    }
  ]
};

