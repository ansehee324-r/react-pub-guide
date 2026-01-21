import { InputHTMLAttributes } from 'react';

import styles from './form.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string
  label?: string
  error?: string
}

export default function Input({
  id,
  label,
  required,
  error,
  className,
  ...rest
}: InputProps) {
  return (
    <div className={styles['form-field']}>
      {label && (
        <label 
          htmlFor={id}
          className={styles['form-field__label']}
        >
          {label}
          {required && <span className={styles['form-field--required']}>*</span>}
        </label>
      )}

      <input 
        id={id}
        className={`${styles['form-field__inp']} ${className ?? ''}`}
        /* 주요 Input Props */
        /* value, onChange, placeholder, required 등 */
        {...rest} 
      />

      {error && <p className={styles['form-field--error']}>{error}</p>}
    </div>
  );
}
