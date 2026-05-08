import img1 from '../assets/images/servicesBlock/image1.png';
import img2 from '../assets/images/servicesBlock/image2.png';
import img3 from '../assets/images/servicesBlock/image3.png';
import img4 from '../assets/images/servicesBlock/image4.png';
import img5 from '../assets/images/servicesBlock/image5.png';
import img6 from '../assets/images/servicesBlock/image6.png';
import img7 from '../assets/images/servicesBlock/image7.png';
import { platforms } from './platforms';

export const serviceCategories = [
  { slug: 'tachography', title: 'Установка и калибровка цифровых тахографов', desc: 'Подойдет для любого транспорта', img: img1, path: '/services/tachography' },
  { slug: 'monitoring', title: 'Спутниковый мониторинг транспорта', desc: 'Снижение эксплуатационных расходов', img: img2, path: '/services/monitoring' },
  { slug: 'datchiki', title: 'Установка датчиков', desc: 'Для решения любых задач транспортных предприятий', img: img3, path: '/services/datchiki' },
  { slug: 'integraciya', title: 'Интеграция систем мониторинга', desc: 'Для упрощения бухучета и учета хозрасхода', img: img4, path: '/services/integraciya' },
  { slug: 'izgotovlenie', title: 'Изготовление карт водителя всех образцов', desc: 'Помощь по любым картам водителя', img: img5, path: '/services/izgotovlenie' },
  { slug: 'videonabludenie', title: 'Видеонаблюдение транспорта по ПП №1640 и ПП № 969', desc: 'Комплект для видеонаблюдения на Ваш транспорт', img: img6, path: '/services/videonabludenie' }
];

export const monitoringPlatforms = platforms;

export { img7 as platformsCoverImg };