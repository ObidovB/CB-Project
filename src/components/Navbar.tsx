"use client";

import { navLinks } from "@/constants/navLinks";
import styles from "@/styles/Navbar.module.css";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CentralBetonIcon from "../../public/icons/centralbeton";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <CentralBetonIcon />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.links}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopAction}>
          <Button href="#banner" variant="primary" size="md" variantIcon="right">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.mobileLink} onClick={closeMenu}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
