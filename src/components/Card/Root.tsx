import React, { useEffect } from "react";
import styles from "@/styles/Card/Root.module.sass";
import { motion, useAnimate } from "framer-motion";

interface RootProps {
  children: React.ReactNode;
  orientation: "vertical" | "horizontal";
}

export default function RootComponent({ children, orientation }: RootProps) {
  const [scope, animate] = useAnimate();

  // Verifica se o elemento está visível na tela com IntersectionObserver API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(scope.current, { y: 0, opacity: 1 }, { duration: 1.2 });
          } else {
            animate(scope.current, { y: 100, opacity: 0 }, { duration: 1.2 });
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentScope = scope.current;
    if (currentScope) {
      observer.observe(currentScope);
    }

    return () => {
      if (currentScope) {
        observer.unobserve(currentScope);
        observer.disconnect();
      }
    };
  }, [scope, animate]);

  return (
    <motion.div
      ref={scope}
      initial={{ y: 100, opacity: 0 }}
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