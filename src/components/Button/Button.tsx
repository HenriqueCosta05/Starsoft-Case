import React from 'react';
import styles from '../../styles/Button/Button.module.sass';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function Button({ isLoading = false, disabled, children, onClick, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${styles.base} ${disabled ? styles.disabled : ''}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      onClick={onClick}
    >
      {isLoading ? <span className={styles.spinner}></span> : children}
    </button>
  );
}