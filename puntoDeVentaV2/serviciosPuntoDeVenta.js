calcularValorDescuento=function(monto, porcentajeDeDescuento){
    let descuento = monto*(porcentajeDeDescuento/100);
    return descuento
}

calcularIva=function(monto){
    let iva = calcularValorDescuento(monto, 12);
    return iva;
}

calcularSubtotal=function(precio,cantidad){
    let subtotal=precio*cantidad;
    return subtotal;
}

calcularTotal=function(subtotal,descuento,iva){
    let valorTotal=subtotal-descuento+iva;
    return valorTotal;
}