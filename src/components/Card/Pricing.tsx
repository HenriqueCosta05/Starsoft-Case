import React from "react";
import styles from "@/styles/Card/Pricing.module.sass";
import { Coin } from "../Icons";

interface PricingProps {
  children: string | number;
}
export default function PricingComponent({ children }: PricingProps) {
    return (
        <span className={`${styles.card_pricing}`}>
            <Coin className={`${styles.card_pricing_icon}`} />
            {children}
        </span>
    );
}
