import { useState, useRef } from 'react';
import styles from './FAQ.module.css';
import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import { faqData } from '../../../data/faq';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container as="section" className={styles.faqSection} aria-labelledby="faq-title">
      <SectionHeader title="Ваш вопрос - наш ответ" />

      <div className={styles.items}>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          const contentRef = contentRefs.current[index];
          const heightStyle = isOpen && contentRef 
            ? { '--max-height': `${contentRef.scrollHeight}px` } 
            : { '--max-height': '0px' };

          return (
            <div
              key={index}
              className={`${styles.item} ${isOpen ? styles.isOpen : ''}`}
            >
              <div className={styles.title} onClick={() => toggle(index)}>
                <div className={styles.iconWrapper}>
                  <div className={styles.svgClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12ZM12.75 8.25C12.75 7.83579 12.4142 7.5 12 7.5C11.5858 7.5 11.25 7.83579 11.25 8.25V11.25L8.25 11.25C7.83579 11.25 7.5 11.5858 7.5 12C7.5 12.4142 7.83579 12.75 8.25 12.75L11.25 12.75V15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75V12.75H15.75C16.1642 12.75 16.5 12.4142 16.5 12C16.5 11.5858 16.1642 11.25 15.75 11.25H12.75V8.25Z" fill="#0088CC"></path>
                    </svg>
                  </div>
                  <div className={styles.svgOpen}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M15.75 12L8.25 12M21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3848 2.25 21.75 6.61522 21.75 12Z" stroke="#0088CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <div className={styles.text}>{item.question}</div>
              </div>
              <div 
                ref={(el) => contentRefs.current[index] = el} 
                className={styles.content}
                style={heightStyle}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}