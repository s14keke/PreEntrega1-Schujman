function obtenerNumeroInput(mensaje) {
    var input = prompt(mensaje);
    var numero = parseFloat(input);
    
    if (isNaN(numero)) {
        alert("Por favor, ingrese un número válido.");
        return obtenerNumeroInput(mensaje);
    }
    
    return numero;
}

function calcularPrecioFinal(precioBase, porcentajeImpuestos, porcentajeDescuento) {
    var impuestos = (precioBase * porcentajeImpuestos) / 100;
    var descuentos = (precioBase * porcentajeDescuento) / 100;
    var precioFinal = precioBase + impuestos - descuentos;
    
    return {
        precioBase: precioBase.toFixed(2),
        impuestos: impuestos.toFixed(2),
        descuentos: descuentos.toFixed(2),
        precioFinal: precioFinal.toFixed(2)
    };
}

var precioBase = obtenerNumeroInput("Ingrese el precio base del producto:");
var porcentajeImpuestos = obtenerNumeroInput("Ingrese el porcentaje de impuestos:");
var porcentajeDescuento = obtenerNumeroInput("Ingrese el porcentaje de descuento:");

var resultado = calcularPrecioFinal(precioBase, porcentajeImpuestos, porcentajeDescuento);

alert("Precio base: $" + resultado.precioBase +
      "\nImpuestos: $" + resultado.impuestos +
      "\nDescuentos: $" + resultado.descuentos +
      "\nPrecio final: $" + resultado.precioFinal);