
        var precioBase = prompt("Ingrese el precio base del producto:");

        precioBase = parseFloat(precioBase);

        if (isNaN(precioBase)) {
            alert("Por favor, ingrese un número válido para el precio base.");
        } else {
            var porcentajeImpuestos = prompt("Ingrese el porcentaje de impuestos:");

            porcentajeImpuestos = parseFloat(porcentajeImpuestos);

            if (isNaN(porcentajeImpuestos)) {
                alert("Por favor, ingrese un número válido para el porcentaje de impuestos.");
            } else {

                var porcentajeDescuento = prompt("Ingrese el porcentaje de descuento:");

                porcentajeDescuento = parseFloat(porcentajeDescuento);

                if (isNaN(porcentajeDescuento)) {
                    alert("Por favor, ingrese un número válido para el porcentaje de descuento.");
                } else {
                    var impuestos = (precioBase * porcentajeImpuestos) / 100;

                    var descuentos = (precioBase * porcentajeDescuento) / 100;

                    var precioFinal = precioBase + impuestos - descuentos;

                    alert("Precio base: $" + precioBase.toFixed(2) +
                          "\nImpuestos: $" + impuestos.toFixed(2) +
                          "\nDescuentos: $" + descuentos.toFixed(2) +
                          "\nPrecio final: $" + precioFinal.toFixed(2));
                }
            }
        }