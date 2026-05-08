import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import { partnersData } from '../../../data/partners';
import styles from './Partners.module.css';

export default function Partners() {
  return (
    <Container as="section" className={styles.section} aria-labelledby="partners-title">
      <SectionHeader title="Наши партнёры" />

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          spaceBetween={32}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2 },
            577: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5, spaceBetween: 20 },
            1201: { slidesPerView: 6 },
            1401: { slidesPerView: 7 },
          }}
          className={styles.swiper}
        >
          {partnersData.map((img, index) => (
            <SwiperSlide key={index}>
              <div className={styles.item}>
                <img src={img} alt="Партнер" loading="lazy" width="150" height="80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}