import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, desc, img, link }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
      <div className={styles.cardMedia}>
        <img className={styles.cardImg} src={img} alt="" width="200" height="150" />
      </div>
    </Link>
  );
}