import React from "react";
import styles from "@/styles/Redirect/Redirect.module.sass";
import Link from "next/link";

interface ToggleProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function RedirectComponent({ children }: ToggleProps) {
  return (
    <Link className={`${styles.base}`} href="/">
      {children}
    </Link>
  );
}
