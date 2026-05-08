import styles from './ServicesBlock.module.css';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import ServiceCard from '../../ui/ServiceCard';
import { serviceCategories, monitoringPlatforms, platformsCoverImg } from '../../../data/services';

export default function ServicesBlock() {
  return (
    <Container as="section" className={styles.section} aria-labelledby="services-title">
      <SectionHeader title="Наши услуги" linkText="Смотреть все услуги" linkTo="/services" />
      
      <ul className={styles.list}>
        {serviceCategories.map((item) => (
          <li key={item.slug} className={styles.item}>
            <ServiceCard title={item.title} desc={item.desc} img={item.img} link={item.path} />
          </li>
        ))}

        <li className={`${styles.item} ${styles.itemWide}`}>
          <div className={`${styles.card} ${styles.cardPlatforms}`}>
            <div className={`${styles.cardContent} ${styles.cardPlatformsContent}`}>
              <h3 className={`${styles.cardTitle} ${styles.cardTitleLight}`}>Платформы для отслеживания</h3>
            </div>
            <div className={`${styles.cardMedia} ${styles.cardMediaLast}`}>
              <img className={styles.cardImg} src={platformsCoverImg} alt="" width="200" height="150" />
            </div> 
            
            <div className={`${styles.platformsList} ${styles.cardPlatformsList}`}>
              {monitoringPlatforms.map((p) => (
                <a 
                  key={p.id} 
                  href={p.url} 
                  className={styles.platformBtn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>Платформа</span>
                  {p.img && <img className={styles.platformLogo} src={p.img} alt={p.name} width="40" height="40" />}
                  {p.showName && <span className={styles.platformName}>{p.name}</span>}
                </a>
              ))}
            </div>
          </div>
        </li>
      </ul>
    </Container>
  );
}