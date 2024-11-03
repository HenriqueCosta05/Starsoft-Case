import React, { useMemo } from "react";
import styles from "../../styles/Button/Button.module.sass";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  progress?: number;
  className?: string;
  variant?: "primary" | "secondary"; 
}

export default function Button({
  progress,
  disabled,
  children,
  className,
  variant = "primary", 
  onClick,
  ...props
}: ButtonProps) {

  // Estou utilizando useMemo para evitar que o componente seja renderizado novamente caso não haja mudanças nas propriedades
  const { buttonClassName, progressStyle } = useMemo(() => {
    const buttonClassName = `${styles.base} ${
      disabled ? styles.disabled : ""
    } ${styles[variant]}`;
    const progressStyle =
      progress !== undefined ? { width: `${progress}%` } : {};

    return { buttonClassName, progressStyle };
  }, [disabled, variant, progress]);

  return (
    <div className={className}>
      {progress !== undefined && (
        <div className={styles.progress_bar}>
          <span className={styles.progress} style={progressStyle}></span>
        </div>
      )}
      <button
        {...props}
        className={buttonClassName}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
