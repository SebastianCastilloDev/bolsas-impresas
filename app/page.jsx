import Hero from '@/components/Hero';
import Products from '@/components/Products';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div>
      <Hero />
      <section id="productos">
        <Products />
      </section>
      <section id="contacto">
        <ContactForm />
      </section>
    </div>
  );
}
