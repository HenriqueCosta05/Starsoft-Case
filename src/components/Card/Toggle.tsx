import React from "react";
import styles from "@/styles/Card/Toggle.module.sass";

interface ToggleProps {
  children: React.ReactNode;
}
export default function ToggleComponent({ children }: ToggleProps) {
  return <div className={`${styles.card_title}`}>{children}</div>;
}
