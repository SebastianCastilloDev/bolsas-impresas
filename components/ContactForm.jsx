export default function ContactForm() {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8">Contáctanos</h2>
                <div className="max-w-xl mx-auto">
                    <form className="space-y-4">
                        <input type="text" placeholder="Nombre" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                        <input type="email" placeholder="Correo" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                        <textarea placeholder="Mensaje" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">Enviar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
