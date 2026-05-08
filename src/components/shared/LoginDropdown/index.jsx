import { useEffect } from 'react';
import styles from './LoginDropdown.module.css';

import axenta from '../../../assets/logo/axenta.svg';
import winlon from '../../../assets/logo/winlon.svg';
import globars from '../../../assets/logo/globars-logo.png';

const platforms = [
  { name: 'Axenta', url: 'https://axenta.cloud/auth/login', img: axenta },
  { name: 'Wialon', url: 'https://web1.wiapro.ru/?lang=ru', img: winlon, showName: true },
  { name: 'АО ГЛОНАСС', url: 'https://monitoring.aoglonass.ru/', showName: true },
  { name: 'GLOBARS', url: 'https://go2.globars.ru/login', img: globars, showName: true }
];

export default function LoginDropdown({ dropdownId, isOpen, onToggle, triggerRef }) {
  useEffect(() => {
    if (!isOpen) return;
    
    function handleClickOutside(e) {
      if (triggerRef?.current && !triggerRef.current.contains(e.target)) {
        const dropdown = document.getElementById(dropdownId);
        if (dropdown && !dropdown.contains(e.target)) {
          onToggle(false);
        }
      }
    }
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, onToggle, dropdownId, triggerRef]);

  useEffect(() => {
    if (!isOpen) return;
    
    function handleEscape(e) {
      if (e.key === 'Escape') onToggle(false);
    }
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onToggle]);

  return (
    <div id={dropdownId} className={`${styles.dropdown} ${isOpen ? styles.open : ''}`} hidden={!isOpen}>
      <ul className={styles.list}>
        {platforms.map((p) => (
          <li key={p.name} className={styles.item}>
            <a href={p.url} className={styles.link} rel="noopener noreferrer" target="_blank">
              <span className={styles.visuallyHidden}>Платформа</span>
              {p.img && <img src={p.img} width={40} height={40} alt={p.name} className={styles.logo} />}
              {p.showName && <span className={styles.name}>{p.name}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}