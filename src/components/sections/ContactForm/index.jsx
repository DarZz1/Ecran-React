import { useState } from 'react';
import Container from '../../ui/Container';
import formImg from '../../../assets/images/form/image1.png';
import { contactFormData } from '../../../data/contactForm';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [isChecked, setIsChecked] = useState(true);
  const { title, subtitle, placeholders, consentText, policyLink, policyText, buttonText } = contactFormData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data ready for submission');
  };

  return (
    <Container as="section" className={styles.section} aria-labelledby="form-title">
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.text}>
              <h2 id="form-title" className={styles.title}>{title}</h2>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
                                                                    
            <div className={styles.row}>
              <label className={styles.field}>
                <input
                  className={styles.input}
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder=" "
                  required
                  autoComplete="name"
                />
                <span className={styles.fieldLabel}>{placeholders.name}</span>
              </label>

              <label className={styles.field}>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <span className={styles.fieldLabel}>{placeholders.email}</span>
              </label>                    
            </div>

            <label className={`${styles.field} ${styles.fieldFullWidth}`}>
              <textarea
                className={styles.textarea}
                name="message"
                id="message"
                placeholder=" "
                required
              ></textarea>
              <span className={styles.fieldLabel}>{placeholders.message}</span>
            </label>   

            <div className={styles.actions}>
              <button 
                className={`${styles.button} ${!isChecked ? styles.buttonDisabled : ''}`} 
                type="submit" 
                disabled={!isChecked}
              >
                <span>{buttonText}</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M17 8L21 12M21 12L17 16M21 12L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>

              <div className={styles.consent}>
                <label className={styles.checkbox}>
                  <input 
                    className={styles.checkboxInput} 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <span className={styles.checkmark} aria-hidden="true"></span>
                  <span className={styles.body}>
                    {consentText}{' '}
                    <a className={styles.link} href={policyLink}>
                      {policyText}
                    </a>
                  </span>
                </label>
              </div>
            </div> 
          </form>
    
          <div className={styles.media}>
            <img className={styles.img} src={formImg} alt="Иллюстрация обратной связи" loading="lazy" width="500" height="600" />
          </div>
        </div>
      </div>
    </Container>
  );
}