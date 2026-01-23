// components/Icon.tsx
import { ReactNode } from 'react';

import { iconData, IconName } from './iconData';

interface IconProps {
  name?: IconName;
  children?: ReactNode;
  width?: number;
  height?: number;
  size?: number;
  color?: string;
  viewBox?: string;
  'aria-label'?: string;
}

export default function Icon({
  name,
  children,
  width,
  height,
  size = 24,
  color = 'currentColor',
  viewBox = '0 0 24 24',
  'aria-label': ariaLabel,
}: IconProps) {
  const content = name ? iconData[name] : children;

  if(!content) return null;

  const w = width ?? size;
  const h = height ?? size;

  return (
    <svg
      width={w}
      height={h}
      viewBox={viewBox}
      color={color}
      xmlns='http://www.w3.org/2000/svg'
      role={ariaLabel ? 'img' : undefined}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
    >
      {content}
    </svg>
  );
}
