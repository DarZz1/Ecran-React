import Container from '../../ui/Container';

import { aboutCompanyData } from '../../../data/aboutCompany';

import styles from './AboutCompany.module.css';

export default function AboutCompany() {
  const { title, subtitle, activitiesTitle, activities, trustTitle, trustText, images, video } = aboutCompanyData;

  return (
    <section className={styles.section} aria-labelledby="about-title">
      <div className={styles.wrapper}>
        <Container>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.textBlock}>
                <div className={styles.header}>
                  <h2 id="about-title" className={styles.title}>{title}</h2>
                  <p className={styles.subtitle}>{subtitle}</p>
                </div>

                <div className={styles.activities}>
                  <div className={styles.activitiesWrapper}>
                    <h3 className={styles.activitiesTitle}>{activitiesTitle}</h3>
                    {activities.map((item, idx) => (
                      <div key={idx} className={styles.activitiesItem}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#EEF1F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>

                  <a href={images.main} className={styles.mobileImage} aria-label="Открыть изображение в полном размере">
                    <img src={images.main} alt="Производственная деятельность компании Экран" loading="lazy" width="586" height="700" />
                  </a>
                </div>
              </div>

              <div className={styles.mainImage}>
                <a href={images.main} className={styles.imageLink} aria-label="Открыть изображение в полном размере">
                  <img src={images.main} alt="Производственная деятельность компании Экран" loading="lazy" width="586" height="700" />
                </a>
              </div>
            </div>

            <div className={styles.bottom}>
              <div className={styles.videoWrapper}>
                <video className={styles.video} src={video} width="708" autoPlay loop controls muted playsInline>
                  Ваш браузер не поддерживает видео тег.
                </video>
              </div>

              <div className={styles.trustBlock}>
                <h3 className={styles.trustTitle}>{trustTitle}</h3>
                <div className={styles.trustContent}>
                  <p>{trustText}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}