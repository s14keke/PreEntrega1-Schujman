function obtenerNumeroInput(mensaje) {
  let input = prompt(mensaje);
  let numero = parseFloat(input);

  if (isNaN(numero)) {
      alert("Por favor, ingrese un número válido.");
      return obtenerNumeroInput(mensaje);  
  }

  return numero;
}

function calcularPrecioFinal(precioBase, porcentajeImpuestos, porcentajeDescuento) {
  let impuestos = (precioBase * porcentajeImpuestos) / 100;
  let descuentos = (precioBase * porcentajeDescuento) / 100;
  let precioFinal = precioBase + impuestos - descuentos;

  return {
      precioBase: precioBase.toFixed(2),
      impuestos: impuestos.toFixed(2),
      descuentos: descuentos.toFixed(2),
      precioFinal: precioFinal.toFixed(2)
  };
}

let precioBase, porcentajeImpuestos, porcentajeDescuento;

while (true) {
  precioBase = obtenerNumeroInput("Ingrese el precio base del producto:");

  if (!isNaN(precioBase)) {
      break;
  }
}

while (true) {
  porcentajeImpuestos = obtenerNumeroInput("Ingrese el porcentaje de impuestos:");

  if (!isNaN(porcentajeImpuestos)) {
      break;
  }
}

while (true) {
  porcentajeDescuento = obtenerNumeroInput("Ingrese el porcentaje de descuento:");

  if (!isNaN(porcentajeDescuento)) {
      break;
  }
}

let resultado = calcularPrecioFinal(precioBase, porcentajeImpuestos, porcentajeDescuento);

alert("Precio base: $" + resultado.precioBase +
  "\nImpuestos: $" + resultado.impuestos +
  "\nDescuentos: $" + resultado.descuentos +
  "\nPrecio final: $" + resultado.precioFinal);