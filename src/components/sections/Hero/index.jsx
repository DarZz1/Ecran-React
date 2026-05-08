import styles from './Hero.module.css';
import Container from '../../ui/Container';
import heroImage from '../../../assets/images/hero/hero.png';

export default function Hero() {
  return (
    <Container as="section" className={styles.hero} aria-labelledby="hero-title" role="banner">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Поможем сделать бизнес прибыльнее!
          </h1>
          <p className={styles.description}>
            Выполняем нормы законодательства в сфере тахографии с 2010 года!
          </p>
          <a href="#modal-callback" className={styles.button}>
            <span className={styles.buttonText}>Получить консультацию</span>
            <svg className={styles.buttonIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path className={styles.buttonIconPath} d="M17 8L21 12M21 12L17 16M21 12L3 12" />
              <path className={styles.buttonIconPath} d="M17 8L21 12M21 12L17 16M21 12L3 12" />
            </svg>
          </a>
        </div>
        <div className={styles.imageWrapper}>
          <img 
            className={styles.image} 
            src={heroImage} 
            alt="Специалист по тахографии за работой" 
            width="800" 
            height="600" 
            loading="eager" 
            fetchPriority="high" 
          />
        </div>
      </div>
    </Container>
  );
}