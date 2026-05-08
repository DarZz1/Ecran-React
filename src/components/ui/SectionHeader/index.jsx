import { Link } from 'react-router-dom';
import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, linkText, linkTo }) {
  return (
    <div className={styles.head}>
      <h2 className={styles.title}>{title}</h2>
      {linkText && (
        <Link to={linkTo} className={styles.allLink}>
          <span className={styles.allText}>{linkText}</span>
          <svg className={styles.allIcon} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path className={styles.allIconPath} d="M12.6667 6L8.00004 10.6667L3.33337 6" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </Link>
      )}
    </div>
  );
}