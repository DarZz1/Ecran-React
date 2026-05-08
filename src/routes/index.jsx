import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <p>Услуги (скоро)</p> },
      { path: 'tachography', element: <p>Тахография (скоро)</p> },
      { path: 'solutions', element: <p>Решения (скоро)</p> },
      { path: 'portfolio', element: <p>Примеры работ (скоро)</p> },
      { path: 'certificates', element: <p>Сертификаты (скоро)</p> },
      { path: 'era-glonass', element: <p>ЭРА ГЛОНАСС (скоро)</p> },
      { path: 'contacts', element: <p>Контакты (скоро)</p> },
      { path: 'privacy-policy', element: <p>Политика (скоро)</p> },
    ],
  },
]);