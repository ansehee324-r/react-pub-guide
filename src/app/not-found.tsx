import Link from 'next/link';

import Button from '@/components/Button/Button';
import AppShell from '@/components/layout/AppShell';
import Container from '@/components/layout/Container';

import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <AppShell>
      <Container>
        <div className={styles.error}>
          <h1>페이지를 찾을 수 없습니다</h1>
          <p>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>

          <Link href='/'>
            <Button>홈으로 이동</Button>
          </Link>
        </div>
      </Container>
    </AppShell>
  );
};
