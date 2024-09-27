// Definición de costos constantes
const COSTOS = {
    diseno: 5000, // CLP
    vellum: 3000, // CLP
    revelado: 2000, // CLP
    malla: 500, // CLP
    tinta: 1100, // CLP (0.1 kg para 100 bolsas)
    impresionPorBolsa: 10, // CLP
    secadoPorBolsa: 5, // CLP
    embalajePorBolsa: 5, // CLP
};

// Definición de tipos de bolsa
const TIPOS_BOLSA = {
    papel: 20,
    tnt: 25,
    plastico: 30,
    genero: 40
};

// Funciones de cálculo
function calcularCostoFijo() {
    const { diseno, vellum, revelado, malla } = COSTOS;
    return diseno + vellum + revelado + malla;
}

function calcularCostoVariable(cantidadBolsas, tipoBolsa) {
    const { tinta, impresionPorBolsa, secadoPorBolsa, embalajePorBolsa } = COSTOS;
    return tinta + (impresionPorBolsa + secadoPorBolsa + embalajePorBolsa + TIPOS_BOLSA[tipoBolsa]) * cantidadBolsas;
}

// Cambia exportación a require
function calcularCostoTotal(cantidadBolsas, tipoBolsa) {
    return calcularCostoFijo() + calcularCostoVariable(cantidadBolsas, tipoBolsa);
}

module.exports = { calcularCostoTotal }; // Exporta la función
