import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="shell footer__row">
        <div>
          <div className="brand__name">Davis Kunyu</div>
          <p className="p muted">Full‑Stack · Android · Cybersecurity · Data · AI/ML · Blockchain</p>
          <p className="p muted">© {year}</p>
        </div>
        <div className="footlinks" aria-label="Footer links">
          <Link className="footlink" href="/projects">
            Projects
          </Link>
          <a className="footlink" href="https://github.com/daviesqunyu" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            className="footlink"
            href="https://www.linkedin.com/in/davis-kunyu-980673295/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="footlink" href="mailto:daviskunyu@gmail.com">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

