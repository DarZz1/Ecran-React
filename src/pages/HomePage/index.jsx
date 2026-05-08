import Hero from '../../components/sections/Hero';
import Advantages from '../../components/sections/Advantages';
import ServicesBlock from '../../components/sections/ServicesBlock';
import BusinessHelpBlock from '../../components/sections/BusinessHelpBlock';
import AboutCompany from '../../components/sections/AboutCompany';

export default function HomePage() {
  return (
    <>
        <Hero />
        <Advantages />
        <ServicesBlock />
        <BusinessHelpBlock />
        <AboutCompany />
    </>
  );
}