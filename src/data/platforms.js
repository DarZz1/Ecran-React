import axenta from '../assets/logo/axenta.svg';
import winlon from '../assets/logo/winlon.svg';
import globars from '../assets/logo/globars-logo.png';

export const platforms = [
  { 
    id: 'axenta',
    name: 'Axenta', 
    url: 'https://axenta.cloud/auth/login', 
    img: axenta 
  },
  { 
    id: 'wialon',
    name: 'Wialon', 
    url: 'https://web1.wiapro.ru/?lang=ru', 
    img: winlon, 
    showName: true 
  },
  { 
    id: 'glonass',
    name: 'АО ГЛОНАСС', 
    url: 'https://monitoring.aoglonass.ru/', 
    showName: true 
  },
  { 
    id: 'globars',
    name: 'GLOBARS', 
    url: 'https://go2.globars.ru/login', 
    img: globars, 
    showName: true 
  }
];