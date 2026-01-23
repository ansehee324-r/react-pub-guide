import Container from '@/components/layout/Container';

import GuideClient from './GuideClient';
import styles from './page.module.css';

export default function GuidePage() {

  return (
    <Container>
      <h1 className={styles.title}>Guide</h1>

      <GuideClient />
    </Container>
  );
}
