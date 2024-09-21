export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Bolsas Impresas. Todos los derechos reservados.</p>

                {/* Enlaces a redes sociales (opcional) */}
                <div className="mt-4 space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Facebook
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Twitter
                    </a>
                </div>
            </div>
        </footer>
    );
}
