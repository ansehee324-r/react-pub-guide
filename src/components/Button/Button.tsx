import { ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

type Variant = 'solid' | 'outline';
type Color = 'primary' | 'secondary' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
}

export default function Button({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  children,
  ...rest
}: Props) {
  return (
    <button
      className={[
        styles.button,
        styles[`variant-${variant}`],
        styles[`color-${color}`],
        styles[`size-${size}`],
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
