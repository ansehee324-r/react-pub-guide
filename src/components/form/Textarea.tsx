import { TextareaHTMLAttributes } from 'react';

import styles from './form.module.css';

interface InputTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id?: string
  label?: string
}

export default function Textarea({
  id,
  label,
  className,
  ...rest
}: InputTextareaProps) {
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

      <textarea
        id={id}
        className={`${styles['form-field__inp']} ${styles['form-field__inp--textarea']} ${className ?? ''}`}
        {...rest}
      />
    </div>
  );
}
