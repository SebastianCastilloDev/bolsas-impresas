import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bolsas impresas',
  description: 'Bolsas impresas personalizadas para tu negocio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className='container mx-auto px-4'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
