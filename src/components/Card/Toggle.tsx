import React from "react";
import styles from "@/styles/Card/Toggle.module.sass";

interface ToggleProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export default function ToggleComponent({ children, onClick }: ToggleProps) {
  return <button className={`${styles.toggle}`} onClick={onClick}>{children}</button>;
}
