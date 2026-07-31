"use client";
import { ArrowUp } from "lucide-react";
import styles from "@/styles/Footer.module.css";

export default function ScrollToTop() {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className={styles.scrollTop}
      aria-label="Back to top"
    >
      <ArrowUp
        size={26}
        strokeWidth={2.5}
        style={{ backgroundColor: "transparent" }}
      />
    </button>
  );
}
