import React, { useRef } from "react";
import styles from "@/styles/Card/Root.module.sass";
import { motion, useInView } from "framer-motion";

interface RootProps {
  children: React.ReactNode;
  orientation: "vertical" | "horizontal";
}

export default function RootComponent({ children, orientation }: RootProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
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