import { Link } from 'react-router-dom';
import styles from './SolutionCard.module.css';

export default function SolutionCard({ title, desc, img, alt, link }) {
  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardMedia}>
        <img 
          className={styles.cardImg} 
          src={img} 
          alt={alt} 
          width="400" 
          height="300" 
          loading="lazy" 
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </Link>
  );
}