import { InputHTMLAttributes } from 'react';

import styles from './form.module.css';

interface Option {
  label: string;
  value: string;
}

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  options: Option[];
  direction?: 'row' | 'column';
}

export default function Radio({ 
  name,
  label,
  options,
  direction = 'row',
  ...rest
}: RadioProps) {
  return (
    <>
      {label && (
        <p className={styles['form-field__label']}>
          {label}
          {rest.required && <span className={styles['form-field--required']}>*</span>}
        </p>
      )}

      <div 
        role='radiogroup'
        className={
          direction === 'row' 
            ? styles['group--row'] 
            : styles['group--column']
        }  
      >
        {options.map((option, idx) => {
          const id = `${name}-${idx}`;

          return (
            <label
              key={option.value}
              htmlFor={id}
              className={styles['form-field--radio']}
            >
              <input 
                type='radio'
                id={id}
                name={name}
                value={option.value}
                {...rest} 
              />
              {option.label}
            </label>
          );
        })}
      </div>
    </>
  );
}
