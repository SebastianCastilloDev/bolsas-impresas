import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bolsas impresas personalizadas - Calidad y sostenibilidad',
  description: 'Compra bolsas personalizadas y ecológicas para tu negocio con nosotros.',
  openGraph: {
    type: 'website',
    url: 'https://tusitioweb.com',
    title: 'Bolsas impresas personalizadas',
    description: 'Compra bolsas personalizadas y ecológicas para tu negocio con nosotros.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 800,
        height: 600,
        alt: 'Bolsas personalizadas',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className='mx-auto '>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
