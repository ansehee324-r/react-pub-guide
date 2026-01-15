'use client';

import { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

interface Props {
  children: ReactNode;
}

export default function AppShell({ children }: Props) {
  return (
    <div className='app'>
      <Header />
      <main className='app__main'>{children}</main>
      <Footer />
    </div>
  );
}
