import React from "react";
import styles from "../../styles/Button/Button.module.sass";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  progress?: number;
  className?: string;
}

export default function Button({
  progress,
  disabled,
  children,
  className,
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
      >
        {children}
      </button>
    </div>
  );
}
