// CalcularCosto.js
const { calcularCostoTotal } = require('./modelo_abc.js');

// Ejemplo de uso
const cantidadBolsas = 100; // Cambia según la cantidad deseada
const tipoBolsa = 'papel'; // Cambia según el tipo de bolsa

const costoTotal = calcularCostoTotal(cantidadBolsas, tipoBolsa);
console.log(`El costo total para ${cantidadBolsas} bolsas de tipo ${tipoBolsa} es: ${costoTotal} CLP`);

// Ejemplo de uso: generar lista de precios
const tiposBolsas = ['papel', 'tnt', 'plastico', 'genero']; // Tipos de bolsas
const cantidades = [50, 100, 200, 500]; // Cantidades de bolsas

// Generar lista de precios
tiposBolsas.forEach(tipoBolsa => {
    console.log(`Precios para bolsas de tipo ${tipoBolsa}:`);
    cantidades.forEach(cantidadBolsas => {
        const costoTotal = calcularCostoTotal(cantidadBolsas, tipoBolsa);
        console.log(`  - ${cantidadBolsas} bolsas: ${costoTotal} CLP`);
    });
    console.log('--------------------------');
});
