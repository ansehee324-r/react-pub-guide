import { ReactNode } from 'react';

export type IconName =
  | 'check'
  | 'close'
  | 'arrowRight'
  | 'plus'
  | 'info'
  | 'warn'
  | 'search';

/**
 * - stroke 기반 아이콘은 반드시 fill="none"
 * - 색상은 currentColor 기준
 */
export const iconData: Record<IconName, ReactNode> = {
  check: (
    <path
      d='M5 12l4 4L19 6'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  ),
  close: (
    <path
      d='M6 6l12 12M6 18L18 6'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
  ),
  arrowRight: (
    <path
      d='M5 12h14M13 6l6 6-6 6'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      fill='none'
    />
  ),
  plus: (
    <path
      d='M12 5v14M5 12h14'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
  ),
  info: (
    <>
      <circle
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <path
        d='M12 16v-4M12 8h.01'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </>
  ),
  warn: (
    <>
      <path
        d='M12 3L1 21h22L12 3z'
        fill='currentColor'
      />
      <path
        d='M12 9v4M12 17h.01'
        stroke='#fff'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </>
  ),
  search: (
    <>
      <circle
        cx='11'
        cy='11'
        r='7'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
      />
      <path
        d='M20 20l-4-4'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </>
  ),
}; 
