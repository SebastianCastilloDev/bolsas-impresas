"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Simulación de los datos del JSON
const fetchProducts = async () => {
    const res = await fetch('/data/products.json');
    const data = await res.json();
    return data;
};

export default function ProductDetails({ params }) {
    const [product, setProduct] = useState(null);
    const { id } = params;

    useEffect(() => {
        const getProduct = async () => {
            const products = await fetchProducts();
            const product = products.find((p) => p.id === parseInt(id));
            setProduct(product);
        };
        if (id) {
            getProduct();
        }
    }, [id]);

    const handlePurchaseClick = () => {
        alert(`Has seleccionado la bolsa: ${product.name}`)
    }

    if (!product) return <p>Cargando...</p>;

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="flex flex-col items-center md:flex-row md:space-x-8">
                {/* Imagen del Producto */}
                <div className="w-full md:w-1/2">
                    <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg shadow-lg" />
                </div>

                {/* Detalles del Producto */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-lg mb-6">{product.description}</p>

                    {/* Colores Disponibles */}
                    <h3 className="text-2xl font-semibold mb-4">Colores Disponibles</h3>
                    <p className="mb-6">{product.colors.join(', ')}</p>

                    {/* Tabla de Precios y Tamaños */}
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2 text-left">Tamaño</th>
                                <th className="border px-4 py-2 text-left">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.sizes.map((size, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border px-4 py-2">{size.size}</td>
                                    <td className="border px-4 py-2">{size.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button
                        onClick={handlePurchaseClick}
                        className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-6 rounded-lg mt-6'
                    >
                        Quiero esta bolsa
                    </button>
                </div>
            </div>
        </div>
    );
}
