"use client"; // Indica que este es un componente cliente

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "¿Cuánto tiempo tarda en producirse mi pedido?",
        answer: "El tiempo de producción varía según la cantidad y el tipo de bolsa. Generalmente, el tiempo de producción es de entre 7 y 10 días hábiles.",
    },
    {
        question: "¿Puedo personalizar las bolsas con mi logotipo?",
        answer: "Sí, ofrecemos la posibilidad de personalizar las bolsas con tu logotipo o imagen corporativa. Puedes enviarnos tu diseño y nosotros nos encargaremos del resto.",
    },
    {
        question: "¿Qué tipos de materiales utilizan?",
        answer: "Ofrecemos bolsas de papel reciclable, algodón y plástico, todas disponibles en diferentes tamaños y estilos.",
    },
    {
        question: "¿Tienen descuentos por pedidos grandes?",
        answer: "Sí, ofrecemos descuentos por pedidos al por mayor. Contáctanos para recibir una cotización personalizada.",
    },
];

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl font-bold mb-8">Preguntas Frecuentes</h2>
                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b-2 border-gray-300 pb-4">
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex justify-between items-center text-left text-xl font-semibold focus:outline-none py-3"
                            >
                                <span>{faq.question}</span>
                                <span className="ml-2">
                                    {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'
                                    }`}
                            >
                                <p className="mt-2 text-gray-600">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
