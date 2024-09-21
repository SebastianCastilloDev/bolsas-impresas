import Hero from '@/components/Hero';
import Products from '@/components/Products';
import ContactForm from '@/components/ContactForm';
import Features from '@/components/Features';
import Faq from '@/components/Faq';  // Importar el componente de FAQ

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="productos">
        <Products />
      </section>
      <section id="faq">
        <Faq />  {/* Nueva sección de preguntas frecuentes */}
      </section>
      <section id="contacto">
        <ContactForm />
      </section>
    </div>
  );
}
