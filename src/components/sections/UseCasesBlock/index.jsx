import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import UseCaseCard from '../../ui/UseCaseCard';

import { useCasesData } from '../../../data/useCases';

import styles from './UseCasesBlock.module.css';

export default function UseCasesBlock() {
  return (
    <Container as="section" className={styles.section} aria-labelledby="examples-title">
      <SectionHeader title="Примеры использования" />
      
      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            767: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
          loop={true}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          className={styles.swiper}
        >
          {useCasesData.map((item) => (
            <SwiperSlide key={item.id}>
              <UseCaseCard 
                tag={item.tag}
                title={item.title}
                desc={item.desc}
                img={item.img}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.action}>
        <a href="/portfolio" className={styles.actionLink}>Все примеры</a>
      </div>
    </Container>
  );
}