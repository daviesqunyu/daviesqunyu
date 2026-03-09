"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

export function NavLinks() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  const links = useMemo(
    () => [
      { href: "/", label: "Home", key: "nav.home" },
      { href: "/about", label: "About", key: "nav.about" },
      { href: "/projects", label: "Projects", key: "nav.projects" },
      { href: "/experience", label: "Experience", key: "nav.experience" },
      { href: "/contact", label: "Contact", key: "nav.contact" }
    ],
    []
  );

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <button
        className="nav__toggle"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="site-nav"
      >
        {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        <span className="sr-only">Toggle navigation</span>
      </button>

      <div className="nav__panel" id="site-nav" data-open={open}>
        {links.map((l) => (
          <Link key={l.href} className="nav__link" href={l.href} data-active={pathname === l.href}>
            <span data-i18n-key={l.key}>{l.label}</span>
          </Link>
        ))}
      </div>
    </>
  );
}

