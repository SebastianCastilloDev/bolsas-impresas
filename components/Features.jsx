export default function Features() {
    const features = [
        {
            id: 1,
            title: "Ecológicas",
            description: "Nuestras bolsas están hechas de materiales reciclables y respetuosos con el medio ambiente.",
            icon: "🌿",
        },
        {
            id: 2,
            title: "Personalizables",
            description: "Diseña tus bolsas con tu logotipo o imagen corporativa para una máxima personalización.",
            icon: "🎨",
        },
        {
            id: 3,
            title: "Alta Durabilidad",
            description: "Fabricadas con materiales de alta calidad, nuestras bolsas están hechas para durar.",
            icon: "🛠️",
        },
        {
            id: 4,
            title: "Variedad de Materiales",
            description: "Ofrecemos bolsas de papel, algodón y plástico en diferentes tamaños y estilos.",
            icon: "🛍️",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8">¿Por qué elegir nuestras bolsas?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
