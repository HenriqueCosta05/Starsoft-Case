import React from "react";
import styles from "@/styles/Card/Root.module.sass";
import { motion } from "framer-motion";

interface RootProps {
  children: React.ReactNode;
  orientation: "vertical" | "horizontal";
}

export default function RootComponent({ children, orientation }: RootProps) {

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      viewport={{once: false}}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={
        orientation === "horizontal"
          ? `${styles.item_wrapper}`
          : `${styles.card_wrapper}`
      }
    >
      {children}
    </motion.div>
  );
}