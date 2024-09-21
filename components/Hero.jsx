export default function Hero() {
    return (
        <section className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-center" style={{ backgroundImage: `url('/images/hero.jpg')` }}>
            <h1 className="text-5xl font-bold text-white">¡Bolsas Impresas Personalizadas!</h1>
            <p className="mt-4 text-xl text-white">Calidad y estilo para tu marca.</p>
            <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">
                Solicitar Presupuesto
            </button>
        </section>
    );
}
