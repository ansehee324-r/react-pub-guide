import { SelectHTMLAttributes } from 'react';

import styles from './form.module.css';

interface selectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id?: string
  label?: string
}

export default function Select({ 
  id,
  label,
  className,
  children, 
  ...rest 
}: selectProps) {
  return (
    <div className={styles['form-field']}>
      {label && (
        <label
          htmlFor={id}
          className={styles['form-field__label']}  
        >
          {label}
          {rest.required && <span className={styles['form-field--required']}>*</span>}
        </label>
      )}

      <select 
        id={id}
        className={`${styles['form-field__inp']} ${styles['form-field--select']} ${className ?? ''}`} {...rest}>
        {children}
      </select>
    </div>
  );
}
