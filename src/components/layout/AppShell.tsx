'use client';

import { ReactNode, useEffect } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { useThemeStore } from '@/stores/themeStore';

interface Props {
  children: ReactNode;
}

export default function AppShell({ children }: Props) {
  const mode = useThemeStore((state) => state.mode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <div className='app'>
      <Header />
      <main className='app__main'>{children}</main>
      <Footer />
    </div>
  );
}
