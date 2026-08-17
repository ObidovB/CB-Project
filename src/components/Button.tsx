import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import styles from "@/styles/Component.module.css";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;

  variant?: "primary" | "outline";
  variantIcon?: "right" | "topRight";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  variantIcon = "right",
  size = "md",
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]} ${styles[size]}`;

  const icon = (
    <ArrowRight
      className={
        variantIcon === "topRight"
          ? `${styles.icon} ${styles.iconTopRight}`
          : styles.icon
      }
      size={16}
    />
  );

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
      {icon}
    </button>
  );
}
