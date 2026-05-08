import styles from './UseCaseCard.module.css';

export default function UseCaseCard({ tag, title, desc, img, link }) {
  return (
    <article className={styles.card}>
      <a className={styles.cardLink} href={link}>
        <div className={styles.cardMedia}>
          <img className={styles.cardImg} src={img} alt={title} width="464" height="224" loading="lazy" />
        </div>
        <div className={styles.cardContent}>
          <span className={styles.cardTag}>{tag}</span>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDesc}>{desc}</p>
        </div>
      </a>
    </article>
  );
}