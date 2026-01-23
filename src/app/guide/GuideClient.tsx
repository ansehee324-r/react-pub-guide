'use client';

import { useEffect, useRef, useState } from 'react';

import Button from '@/components/Button/Button';
import Checkbox from '@/components/form/Checkbox';
import CheckboxGroup from '@/components/form/CheckboxGroup';
import Input from '@/components/form/Input';
import Radio from '@/components/form/Radio';
import Select from '@/components/form/Select';
import Textarea from '@/components/form/Textarea';
import Icon from '@/components/Icon/Icon';

import styles from './page.module.css';

export default function GuideClient() {
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
    <>
      <div ref={guideRef} className={styles.guideWrap}>
        <section className={styles.section}>
          <h2>Button</h2>

          <div>
            <h3>Variant</h3>
            <div className={`${styles.box} ${styles['box--flex']}`}>
              <Button>Primary</Button>
              <Button variant='outline'>Outline</Button>
            </div>
          </div>

          <div>
            <h3>Size</h3>
            <div className={`${styles.box} ${styles['box--flex']}`}>
              <Button size='sm'>Small</Button>
              <Button size='md'>Medium</Button>
              <Button size='lg'>Large</Button>
            </div>
          </div>

          <div>
            <h3>Color / State</h3>
            <div className={`${styles.box} ${styles['box--flex']}`}>
              <Button>Default</Button>
              <Button color='danger'>Danger</Button>
              <Button disabled={true}>Disabled</Button>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Form</h2>

          <div>
            <h3>Input</h3>
            <div className={styles.box}>
              <Input placeholder='입력해주세요' label={'title'} required={true} error={'에러 메세지'} />
            </div>
          </div>
          <div>
            <h3>Textarea</h3>
            <div className={styles.box}>
              <Textarea placeholder='입력해주세요' label={'title'}/>
            </div>
          </div>

          <div>
            <h3>Select</h3>
            <div className={styles.box}>
              <Select>
                <option>Option1</option>
                <option>Option2</option>
                <option>Option3</option>
              </Select>
            </div>
          </div>

          <div>
            <h3>Checkbox</h3>
            <div className={styles.box}>
              <Checkbox label='체크' />
            </div>
          </div>

          <div>
            <h3>Checkbox - 그룹</h3>
            <div className={styles.box}>
              <CheckboxGroup label={'title'} required={true}>
                <Checkbox label='체크1' />
                <Checkbox label='체크2' />
                <Checkbox label='체크3' />
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <h3>Checkbox - 그룹(세로)</h3>
            <div className={styles.box}>
              <CheckboxGroup direction={'column'}>
                <Checkbox label='체크1' />
                <Checkbox label='체크2' />
                <Checkbox label='체크3' />
              </CheckboxGroup>
            </div>
          </div>

          <div>
            <h3>Radio</h3>
            <div className={styles.box}>
              <Radio 
                name='group'
                label='title'
                required={true}
                options={[
                  { label:'옵션1', value:'op1' },
                  { label:'옵션2', value:'op2' },
                ]}
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Icon</h2>

          <div>
            <div className={`${styles.box} ${styles['box--flex']}`}>
              <Icon name='check' />
              <Icon name='check' color='red' width={40} height={40} />
              <Icon color='#222' size={40}>
                <path
                  d='M5 12l4 4L19 6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </Icon>

              <Icon name='close' color='red' />
              <Icon name='arrowRight' />
              <Icon name='plus' />
              <Icon name='info' />
              <Icon name='warn' size={30} color='orange' />
              <Icon name='search' />
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
      
    </>
  );
}
