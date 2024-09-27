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
    bolsa: {
        papel: 20,
        tnt: 25,
        plastico: 30,
        genero: 40
    }
};

// Cantidad de bolsas a producir
const CANTIDAD_BOLSAS = [30,50,100,150,200];

// Funciones de cálculo
function calcularCostoFijo() {
    const { diseno, vellum, revelado, malla } = COSTOS;
    return diseno + vellum + revelado + malla;
}

function calcularCostoVariable(cantidadBolsas, tipoBolsa) {
    const { tinta, impresionPorBolsa, secadoPorBolsa, embalajePorBolsa, bolsa } = COSTOS;
    return tinta + (impresionPorBolsa + secadoPorBolsa + embalajePorBolsa + bolsa[tipoBolsa]) * cantidadBolsas;
}

function calcularCostoTotal(cantidadBolsas, tipoBolsa) {
    return calcularCostoFijo() + calcularCostoVariable(cantidadBolsas, tipoBolsa);
}

function generarListaPrecios(tipoBolsa) {
    return CANTIDAD_BOLSAS.map(cantidad => ({
        cantidadBolsas: cantidad,
        costoTotal: calcularCostoTotal(cantidad, tipoBolsa)
    }));
}

// Ejemplo de uso
const listaPrecios = generarListaPrecios('papel');
console.log(listaPrecios);