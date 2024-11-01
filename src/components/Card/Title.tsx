import React from "react";
import styles from "@/styles/Card/Title.module.sass";

interface TitleProps {
  children: React.ReactNode;
}
export default function TitleComponent({ children }: TitleProps) {
  return <div className={`${styles.card_title}`}>{children}</div>;
}
