'use client';

import Link from 'next/link';

import { useThemeStore } from '@/stores/themeStore';

export default function Header() {
  const mode = useThemeStore((state) => state.mode);
  const toggleMode = useThemeStore((state) => state.toggleMode);

  return (
    <header className='header'>
      <div className='header__logo'>
        <Link href='/'>Logo</Link>
      </div>

      <nav className='header__nav' aria-label='주요 메뉴'>
        <Link href='/menu1' className='header__link'>
          메뉴1
        </Link>
        <Link href='/menu2' className='header__link'>
          메뉴2
        </Link>
        <Link href='/menu3' className='header__link'>
          메뉴3
        </Link>
      </nav>

      <button
        type='button'
        onClick={toggleMode}
        aria-label='테마 전환'
        className='theme-toggle'
      >
        {mode === 'light' ? '🌞' : '🌙'}
      </button>
    </header>
  );
}
