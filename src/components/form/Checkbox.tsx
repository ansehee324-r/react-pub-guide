import { InputHTMLAttributes } from 'react';

import styles from './form.module.css';
import Icon from '../Icon/Icon';

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
      
      <span className={styles['checkbox__box']}>
        {/* unchecked */}
        <span className={`${styles.checkbox__icon} ${styles['checkbox__icon--off']}`}>
          <Icon name='checkbox' />
        </span>

        {/* checked */}
        <span className={`${styles.checkbox__icon} ${styles['checkbox__icon--on']}`}>
          <Icon name='checkboxOn' />
        </span>
      </span>

      {label}
    </label>
  );
}
