'use client';

import { useEffect, useRef, useState } from 'react';

import Button from '@/components/Button/Button';
import Container from '@/components/layout/Container';

import styles from './page.module.css';

export default function GuidePage() {
  const [sectionTitles, setSectionTitles] = useState<string[]>([]);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const guideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titles: string[] = [];
    const guideWrap = guideRef.current;
    if(guideWrap) {
      const h2Elements = guideWrap.querySelectorAll('section > h2');
      h2Elements.forEach((el) => {
        titles.push(el.textContent?.trim() ?? '');
      });
    }
    setSectionTitles(titles);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const guideWrap = guideRef.current;
      if(!guideWrap) return;

      const sections = guideWrap.querySelectorAll('section');
      const scrollY = window.pageYOffset;
      const offset = 50;

      let currentIndex = 0;

      sections.forEach((section, idx) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.pageYOffset - offset;

        if (scrollY >= top) {
          currentIndex = idx;
        }
      });
      setActiveIdx((prev) => (prev !== currentIndex ? currentIndex : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 최초 실행

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (idx: number) => {
    const guideWrap = guideRef.current;
    const offset = 50;

    if (guideWrap) {
      const sections = guideWrap.querySelectorAll('section');
      if (sections[idx]) {
        const target = sections[idx] as HTMLElement;
        const y = window.pageYOffset + target.getBoundingClientRect().top - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <Container>
      <h1 className={styles.title}>Guide</h1>

      <div ref={guideRef} className={styles.guideWrap}>
        {/* Button */}
        <section className={styles.section}>
          <h2>Button</h2>

          <div>
            <h3>Variant</h3>
            <div className={styles.row}>
              <Button>Primary</Button>
              <Button variant='outline'>Outline</Button>
            </div>
          </div>

          <div>
            <h3>Size</h3>
            <div className={styles.row}>
              <Button size='sm'>Small</Button>
              <Button size='md'>Medium</Button>
              <Button size='lg'>Large</Button>
            </div>
          </div>

          <div>
            <h3>Color / State</h3>
            <div className={styles.row}>
              <Button>Default</Button>
              <Button color='danger'>Danger</Button>
              <Button disabled={true}>Disabled</Button>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.guideItem}>
        <ul>
          {sectionTitles.map((title, idx) => (
            <li key={idx}>
              <button
                type='button'
                className={`${styles.guideButton} ${
                  idx === activeIdx ? styles.active : ''
                }`}
                onClick={() => handleScrollToSection(idx)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      
    </Container>
  );
}
