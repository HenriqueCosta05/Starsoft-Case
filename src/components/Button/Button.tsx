import React from "react";
import styles from "../../styles/Button/Button.module.sass";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  progress?: number;
  className?: string;
  backgroundColor?: string;
}

export default function Button({
  progress,
  disabled,
  children,
  className,
  backgroundColor,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <div className={className}>
      {progress !== undefined && (
        <div className={styles.progress_bar}>
          <span
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></span>
        </div>
      )}

      <button
        {...props}
        className={`${styles.base} ${disabled ? styles.disabled : ""}`}
        disabled={disabled}
        onClick={onClick}
        style={{backgroundColor}}
      >
        {children}
      </button>
    </div>
  );
}
