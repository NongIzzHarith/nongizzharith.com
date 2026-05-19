"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${isScrolled ? " scrolled" : ""}`}>
      <ul className="nav-links nav-left">
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#contact">Newsletter</a></li>
      </ul>

      <Link href="/" className="nav-logo">NONG IZZ HARITH</Link>

      <ul className="nav-links nav-right">
        <li><Link href="/about">About</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="mobile-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
