import Link from "next/link";
import { NavLinks } from "./navLinks";

export function SiteHeader() {
  return (
    <header className="header">
      <div className="shell header__row">
        <Link className="brand" href="/" aria-label="Home">
          <span className="mark" aria-hidden="true">
            DV
          </span>
          <span className="brand__text">
            <span className="brand__name">Davis Kunyu</span>
            <span className="brand__tag">Software Engineer</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Primary">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
}

