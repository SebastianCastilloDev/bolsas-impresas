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

// Clase para calcular los costos
class CalculadoraDeCostos {
    /**
     * @param {Pedido} pedido - Instancia de la clase Pedido
     * @param {Object} costos - Objeto con los factores de costo
     */
    constructor(pedido, costos) {
      this.pedido = pedido;
      this.costos = costos;
    }
  
    // Método para calcular el costo total de las bolsas
    calcularCostoBolsas() {
      return this.pedido.bolsa.costoUnitario * this.pedido.cantidad;
    }
  
    // Método para calcular el costo de la tinta
    calcularCostoTinta() {
      const { costoTintaPorColorPorBolsa } = this.costos;
      return costoTintaPorColorPorBolsa * this.pedido.numeroColores * this.pedido.cantidad;
    }
  
    // Método para calcular el costo de mano de obra
    calcularCostoManoDeObra() {
      const { costoManoDeObraPorHora, tiempoImpresionPorBolsaMin } = this.costos;
      const tiempoTotalHoras = (tiempoImpresionPorBolsaMin * this.pedido.cantidad) / 60;
      return tiempoTotalHoras * costoManoDeObraPorHora;
    }
  
    // Método para calcular el costo de secado
    calcularCostoSecado() {
      const { costoSecadoPorBolsa } = this.costos;
      return costoSecadoPorBolsa * this.pedido.cantidad;
    }
  
    // Método para calcular los gastos generales
    calcularGastosGenerales() {
      const { gastosGeneralesPorBolsa } = this.costos;
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
  
  // Crear una instancia de Bolsa
const bolsa = new Bolsa('algodón', { ancho: 30, alto: 40 }, 1.00);

// Crear una instancia de Pedido
const pedido = new Pedido(bolsa, 100, 2, 20.00); // 100 bolsas, 2 colores, costo de diseño $20



const costos = {
    costoTintaPorColorPorBolsa: 0.05,       // Costo de tinta por color por bolsa
    costoManoDeObraPorHora: 20.00,          // Costo de mano de obra por hora
    tiempoImpresionPorBolsaMin: 0.5,        // Tiempo de impresión por bolsa en minutos
    costoSecadoPorBolsa: 0.01,              // Costo de secado por bolsa
    gastosGeneralesPorBolsa: 0.10,          // Gastos generales asignados por bolsa
  };
  
  // Crear una instancia de CalculadoraDeCostos
const calculadora = new CalculadoraDeCostos(pedido, costos);

// Calcular el costo total
const costoTotal = calculadora.calcularCostoTotal();

// Calcular el precio de venta con un margen de beneficio del 30%
const precioVenta = calculadora.calcularPrecioVenta(30);

// Mostrar los resultados
console.log(`Costo Total de Producción: $${costoTotal.toFixed(2)}`);
console.log(`Precio Total de Venta: $${precioVenta.toFixed(2)}`);
console.log(`Precio por Bolsa: $${(precioVenta / pedido.cantidad).toFixed(2)}`);
