import { InputHTMLAttributes } from 'react';

import styles from './form.module.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({ 
  label,
  className,
  ...rest 
}: CheckboxProps) {
  return (
    <label className={`${styles['form-field--check']} ${className ?? ''}`}>
      <input type='checkbox' {...rest} />
      {label}
    </label>
  );
}
