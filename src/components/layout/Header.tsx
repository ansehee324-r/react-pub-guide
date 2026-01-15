'use client';

import { useThemeStore } from '@/stores/themeStore';

export default function Header() {
  const mode = useThemeStore((state) => state.mode);
  const toggleMode = useThemeStore((state) => state.toggleMode);

  return (
    <header className='header'>
      <div className='logo'>LOGO</div>

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
