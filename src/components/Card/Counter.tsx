import React from "react";
import styles from "@/styles/Card/Counter.module.sass";

interface CounterProps {
    handleIncrement: () => void;
    handleDecrement: () => void;
    amount: number;

}
export default function CounterComponent({ handleIncrement, handleDecrement, amount}: CounterProps) {
    return (
      <div className={`${styles.counter}`}>
        <button
          onClick={handleDecrement}
          disabled={amount <= 1}
          className={`${styles.button}`}
        >
          −
        </button>
        <span className={`${styles.amount}`}>{amount}</span>
        <button onClick={handleIncrement} className={`${styles.button}`}>
          +
        </button>
      </div>
    );
}
