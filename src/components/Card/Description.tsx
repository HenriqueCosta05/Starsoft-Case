import React from "react";
import styles from "@/styles/Card/Description.module.sass";

interface DescriptionProps {
  children: React.ReactNode;
}
export default function DescriptionComponent({ children }: DescriptionProps) {
  return <p className={`${styles.card_description}`}>{children}</p>;
}
