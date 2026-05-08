import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import logo from '../../../assets/logo/LOGO.svg';

import PhoneLink from '../../shared/PhoneLink';
import SocialLinks from '../../shared/SocialLinks';
import LoginDropdown from '../../shared/LoginDropdown';

import { menuItems } from '../../../data/navigation';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const loginButtonRef = useRef(null);

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <NavLink className={styles.logo} to="/" aria-label="На главную">
            <img className={styles.logoImage} src={logo} alt="Логотип компании Экран" width={224} height={44} />
          </NavLink>
          
          <div className={styles.navContacts}>
            <div className={styles.contacts}>
              <div className={styles.phones}>   
                <PhoneLink number="+78332542770" label="+7(8332) 54-27-70" />
                <PhoneLink number="+78332544146" label="+7(8332) 54-41-46" />
              </div>
              <SocialLinks />
            </div>

            <nav className={styles.nav} aria-label="Основное меню">
              <ul className={styles.navList}>
                {menuItems.map((item) => (
                  <li key={item.path} className={styles.navItem}>
                    <NavLink
                      className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                      }
                      to={item.path}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.loginBlock}>
            <button 
              type="button" 
              className={styles.loginButton} 
              aria-expanded={isLoginOpen} 
              aria-controls="login-dropdown-list"
              id="login-toggle-btn"
              ref={loginButtonRef}
              onClick={() => setIsLoginOpen(prev => !prev)}
            >
              <span className={styles.loginButtonText}>Вход в мониторинг</span>
              <svg className={styles.loginButtonIcon} width={20} height={10} viewBox="0 0 20 10" fill="none" aria-hidden="true">
                <path className={styles.loginButtonIconPath} d="M15 1L19 5M19 5L15 9M19 5L1 5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <LoginDropdown dropdownId="login-dropdown-list" isOpen={isLoginOpen} onToggle={setIsLoginOpen} triggerRef={loginButtonRef} />
          </div>
        </div>
      </div>
    </header>
  );
}