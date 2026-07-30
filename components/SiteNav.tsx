"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Index", href: "#index" },
  { label: "Work", href: "#work" },
  { label: "Notes", href: "#notes" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="topnav" aria-label="Primary">
        <span className="topnav-slot" aria-hidden />

        <a href="/" className="wordmark">
          Nong Izz Harith
        </a>

        <div className="topnav-slot topnav-right">
          <button
            type="button"
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-drawer"
            onClick={() => setOpen(true)}
          >
            <span aria-hidden />
            <span aria-hidden />
            <span aria-hidden />
          </button>
        </div>
      </nav>

      <div
        className={`drawer-scrim${open ? " is-open" : ""}`}
        onClick={close}
        aria-hidden
      />

      <aside
        id="site-drawer"
        className={`drawer${open ? " is-open" : ""}`}
        aria-label="Menu"
      >
        <button
          type="button"
          className="drawer-close"
          aria-label="Close menu"
          onClick={close}
        >
          <span aria-hidden />
          <span aria-hidden />
        </button>

        <div className="drawer-links">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="cta-pill drawer-contact" onClick={close}>
          Contact
        </a>
      </aside>
    </>
  );
}
