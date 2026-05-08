import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Container from '../../ui/Container';
import SectionHeader from '../../ui/SectionHeader';
import SolutionCard from '../../ui/SolutionCard';

import { businessHelpData } from '../../../data/businessHelp';

import styles from './BusinessHelpBlock.module.css';

export default function BusinessHelpBlock() {
  return (
    <Container as="section" className={styles.section} aria-labelledby="business-title">
      <SectionHeader title="Поможем Вашему бизнесу"/>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            767: { slidesPerView: 3 },
            991: { slidesPerView: 4 },
            1199: { slidesPerView: 5 },
          }}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          className={styles.swiper}
        > 
          {businessHelpData.map((item) => (
            <SwiperSlide key={item.id}>
              <SolutionCard 
                title={item.title}
                desc={item.desc}
                img={item.img}
                alt={item.alt}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}