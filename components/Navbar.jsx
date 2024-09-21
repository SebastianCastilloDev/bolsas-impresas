"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold">
                    Bolsas Impresas
                </Link>

                {/* Menú hamburguesa visible en pantallas pequeñas */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Links de navegación visibles en pantallas medianas y grandes */}
                <div className="hidden md:flex space-x-4">
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

            {/* Menú desplegable en pantallas pequeñas */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <ul className="space-y-4 text-center">
                        <li>
                            <Link href="/" className="hover:underline" onClick={toggleMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="#productos" className="hover:underline" onClick={toggleMenu}>
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link href="#contacto" className="hover:underline" onClick={toggleMenu}>
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
