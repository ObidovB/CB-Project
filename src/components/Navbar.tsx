import { navLinks } from "@/constants/navLinks";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import CentralBetonIcon from "../../public/icons/centralbeton";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <CentralBetonIcon />
        </Link>
        <ul>
          {navLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className={styles.links}>
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button href="#banner" variant="primary" size="md" variantIcon="right">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
