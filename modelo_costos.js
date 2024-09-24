class Bolsa {
    constructor(material, tamaño, costoUnitario) {
        this.material = material;
        this.tamaño = tamaño;
        this.costoUnitario = costoUnitario;
    }
}

class Pedido {
    constructor(bolsa, cantidad, numeroColores, costoDiseño) {
        this.bolsa = bolsa;
        this.cantidad = cantidad;
        this.numeroColores = numeroColores;
        this.costoDiseño = costoDiseño;
    }
}

class CalculadoraDeCostos {
  /**
   * @param {Pedido} pedido - Instancia de la clase Pedido
   * @param {Object} datosBasicos - Objeto con los factores de costo detallados
   */
  constructor(pedido, datosBasicos) {
    this.pedido = pedido;
    this.datosBasicos = datosBasicos;
  }

  // Método para calcular el costo total de las bolsas
  calcularCostoBolsas() {
    return this.pedido.bolsa.costoUnitario * this.pedido.cantidad;
  }

  // Método para calcular el costo de tinta
  calcularCostoTinta() {
    const { valorTarroTinta, rendimientoTarroTinta } = this.datosBasicos;
    const costoTintaPorBolsa = valorTarroTinta / rendimientoTarroTinta;
    return costoTintaPorBolsa * this.pedido.numeroColores * this.pedido.cantidad;
  }

  // Método para calcular el costo de mano de obra
  calcularCostoManoDeObra() {
    const { costoManoDeObraPorHora, tiempoImpresionPorBolsaMin, tiempoPreparacionMin } = this.datosBasicos;
    const tiempoTotalMin = (tiempoImpresionPorBolsaMin * this.pedido.cantidad) + tiempoPreparacionMin;
    const tiempoTotalHoras = tiempoTotalMin / 60;
    return tiempoTotalHoras * costoManoDeObraPorHora;
  }

  // Método para calcular el costo de secado
  calcularCostoSecado() {
    const { costoEnergiaPorHora, tiempoSecadoPorBolsaMin } = this.datosBasicos;
    const tiempoTotalSecadoMin = tiempoSecadoPorBolsaMin * this.pedido.cantidad;
    const tiempoTotalSecadoHoras = tiempoTotalSecadoMin / 60;
    return tiempoTotalSecadoHoras * costoEnergiaPorHora;
  }

  // Método para calcular los gastos generales
  calcularGastosGenerales() {
    const { gastosGeneralesMensuales, produccionMensualEstimada } = this.datosBasicos;
    const gastosGeneralesPorBolsa = gastosGeneralesMensuales / produccionMensualEstimada;
    return gastosGeneralesPorBolsa * this.pedido.cantidad;
  }

  // Método para calcular el costo total
  calcularCostoTotal() {
    return (
      this.calcularCostoBolsas() +
      this.pedido.costoDiseño +
      this.calcularCostoTinta() +
      this.calcularCostoManoDeObra() +
      this.calcularCostoSecado() +
      this.calcularGastosGenerales()
    );
  }

  // Método para calcular el precio de venta
  calcularPrecioVenta(margenBeneficio) {
    const costoTotal = this.calcularCostoTotal();
    return costoTotal * (1 + margenBeneficio / 100);
  }
}


// Datos básicos
const datosBasicos = {
  valorTarroTinta: 50.00,              // Costo de un tarro de tinta
  rendimientoTarroTinta: 1000,         // Número de bolsas por tarro de tinta
  costoManoDeObraPorHora: 20.00,       // Costo de mano de obra por hora
  tiempoImpresionPorBolsaMin: 0.5,     // Tiempo de impresión por bolsa en minutos
  tiempoPreparacionMin: 15,            // Tiempo de preparación en minutos
  costoEnergiaPorHora: 5.00,           // Costo de energía por hora
  tiempoSecadoPorBolsaMin: 2,          // Tiempo de secado por bolsa en minutos
  gastosGeneralesMensuales: 2000.00,   // Gastos generales mensuales
  produccionMensualEstimada: 5000      // Producción mensual estimada de bolsas
};

  
// Crear una instancia de Bolsa
const bolsa = new Bolsa('algodón', { ancho: 30, alto: 40 }, 1.00);

// Crear una instancia de Pedido
const pedido = new Pedido(bolsa, 100, 2, 20.00); // 100 bolsas, 2 colores, costo de diseño $20

// Crear una instancia de CalculadoraDeCostos con datosBasicos
const calculadora = new CalculadoraDeCostos(pedido, datosBasicos);

// Calcular el costo total
const costoTotal = calculadora.calcularCostoTotal();

// Calcular el precio de venta con un margen de beneficio del 30%
const precioVenta = calculadora.calcularPrecioVenta(30);

// Mostrar los resultados
console.log(`Costo Total de Producción: $${costoTotal.toFixed(2)}`);
console.log(`Precio Total de Venta: $${precioVenta.toFixed(2)}`);
console.log(`Precio por Bolsa: $${(precioVenta / pedido.cantidad).toFixed(2)}`);
