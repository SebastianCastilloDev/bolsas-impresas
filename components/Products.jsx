"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'


const fetchProducts = async () => {
    const res = await fetch('/data/products.json');
    const data = await res.json();
    return data;
}

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts();
            setProducts(products);
        };
        getProducts();
    }, []);

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8">Nuestros Productos</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
                            <Image src={product.image} alt={product.name} width={500} height={500} className="rounded-lg" />
                            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                            <p className="mt-2 text-gray-600">{product.description}</p>
                            <Link href={`/products/${product.id}`} className="text-blue-500 hover:underline mt-4 block">
                                Ver más
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
