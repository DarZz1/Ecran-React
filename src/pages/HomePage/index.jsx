import Hero from '../../components/sections/Hero';
import Advantages from '../../components/sections/Advantages';
import ServicesBlock from '../../components/sections/ServicesBlock';
import BusinessHelpBlock from '../../components/sections/BusinessHelpBlock';
import AboutCompany from '../../components/sections/AboutCompany';
import UseCasesBlock from '../../components/sections/UseCasesBlock';
import Partners from '../../components/sections/Partners';
import ContactForm from '../../components/sections/ContactForm';
import FAQ from '../../components/sections/FAQ';

export default function HomePage() {
  return (
    <>
        <Hero />
        <Advantages />
        <ServicesBlock />
        <BusinessHelpBlock />
        <AboutCompany />
        <UseCasesBlock />
        <Partners />
        <ContactForm />
        <FAQ />
    </>
  );
}