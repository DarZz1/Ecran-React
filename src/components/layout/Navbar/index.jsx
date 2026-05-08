import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Navbar.module.css';
import logo from '../../../assets/logo/LOGO.svg';

import Container from '../../ui/Container';
import LoginDropdown from '../../shared/LoginDropdown';
import PhoneLink from '../../shared/PhoneLink';
import SocialLinks from '../../shared/SocialLinks';

import { menuItems } from '../../../data/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const loginButtonRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleLogin = () => setIsLoginOpen(prev => !prev);

  const handleNavClick = (path) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <nav className={styles.navbar} aria-label="mobile-nav">
      <Container>

        <div className={styles.row}>
          <button 
            type="button" 
            className={styles.burger} 
            aria-label="Открыть меню" 
            aria-expanded={isMenuOpen} 
            onClick={toggleMenu}
          >
            <svg className={styles.burgerIcon} width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
            </svg>
          </button>

          <a href="/" className={styles.logo}>
            <img src={logo} alt="Главная" width="224" height="44" className={styles.logoImg} />
          </a>

          <div className={styles.controls}>
            <button 
              type="button" 
              className={styles.loginButton} 
              aria-expanded={isLoginOpen} 
              ref={loginButtonRef}
              onClick={toggleLogin}
            >
              <span className={styles.loginButtonText}>Вход</span>
              <svg className={styles.loginButtonIcon} width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                <path className={styles.loginButtonIconPath} d="M15 1L19 5M19 5L15 9M19 5L1 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            <LoginDropdown dropdownId="login-dropdown-list-mobile" isOpen={isLoginOpen} onToggle={setIsLoginOpen} triggerRef={loginButtonRef} />
          </div>
        </div>
      </Container>
      
      <div id="navbar__mobile" className={`${styles.mobileInner} ${isMenuOpen ? styles.open : ''}`} hidden={!isMenuOpen}>
        <Container>
          <a href="/" className={styles.mobileLogo} onClick={toggleMenu}>
            <img src={logo} alt="Главная" width="128" height="34" className={styles.mobileLogoImg} />
          </a>
          
          <nav aria-label="Мобильное меню">
            <ul className={styles.mobileMenu}>
              {menuItems.map((item) => (
                <li key={item.path} className={styles.navItem}>
                  <button className={styles.navLink} onClick={() => handleNavClick(item.path)}>
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className={styles.phoneSocial}>
            <div className={styles.phone}>
              <PhoneLink number="+78332542770" label="+7(8332) 54-27-70" />
              <PhoneLink number="+78332544146" label="+7(8332) 54-41-46" />
            </div>
            <SocialLinks />
          </div>
        </Container>
      </div>
    </nav>
  );
}