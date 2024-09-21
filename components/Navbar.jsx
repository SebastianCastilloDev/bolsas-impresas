import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    Bolsas Impresas
                </Link>

                {/* Links de navegación */}
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">
                        Inicio
                    </Link>
                    <Link href="#productos" className="hover:underline">
                        Productos
                    </Link>
                    <Link href="#contacto" className="hover:underline">
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}
