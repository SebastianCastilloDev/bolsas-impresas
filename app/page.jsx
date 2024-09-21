import Hero from '@/components/Hero';
import Products from '@/components/Products';
import ContactForm from '@/components/ContactForm';
import Features from '@/components/Features';  // Importar el nuevo componente

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="features">
        <Features />  {/* Sección de características */}
      </section>
      <section id="productos">
        <Products />
      </section>
      <section id="contacto">
        <ContactForm />
      </section>
    </div>
  );
}
