import Image from 'next/image';

export default function Products() {
    const products = [
        {
            id: 1,
            name: 'Bolsa de Papel',
            description: 'Bolsas ecológicas y reciclables.',
            image: '/images/bolsaPapel.jpg'
        },

        {
            id: 2,
            name: 'Bolsa de Algodón',
            description: 'Resistentes y reutilizables.',
            image: '/images/bolsaAlgodon.jpg'
        },

        {
            id: 3,
            name: 'Bolsa de Plástico',
            description: 'Duraderas y personalizables.',
            image: '/images/bolsaPlastico.jpg'
        },

    ];

    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-center text-3xl font-bold mb-8">Nuestros Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
                        {/* Usamos el componente Image */}
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-lg"
                        />
                        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
