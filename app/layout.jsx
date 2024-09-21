import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bolsas impresas',
  description: 'Bolsas impresas personalizadas para tu negocio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>
          <nav>
            <h1>Bolsas impresas</h1>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2021 Bolsas impresas</p>
        </footer>
      </body>
    </html>
  )
}
