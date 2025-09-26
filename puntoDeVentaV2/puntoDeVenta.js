calcularValorTotal=function () {
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto; // SE UTILIZA PARA RECUPERAR EL PRECIO COMO FLOAT
    let cantidad; // SE UTILIZA PARA RECUPERAR LA CANTIDAD COMO INT
   // let porcentajeDescuento;

    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;

    //1. Recuperar el nombre del producto como String
    nombreProducto=recuperarTexto("txtNota1");

    //2. Recuperar el precio como float
    precioProducto=recuperarFloat("txtNota3");
    //3. Recuperar cantidad como int
    cantidad=recuperarInt("txtNota2");
    //4. Recuperar el porcentaje de descuento como int
  //  porcentajeDescuento=recuperarInt("txtPorcentajeDescuento");
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    // Tomar en cuenta el orden de como pasa los parametos de la funcion y colocar bien
    // los parametros cuando invoca la funcion.
if(esProductoValido(nombreProducto,"lblError1") & esCantidadValida(cantidad,"lblError2") & esPrecioValida(precioProducto,"lblError3")){
    valorSubtotal=calcularSubtotal(precioProducto,cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    // Utilizar mostrarTexto
        /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4  
            Subtotal esperado: 54
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblPromedio",valorSubtotal);

    //6. Invocar a calcularValorDescuento y lo que devuelve guardar en la variable valorDescuento
   valorDescuento=calcularDescuentoPorVolumen(valorSubtotal,cantidad);
    //7. Mostrar el resultado en el componente lblDescuento
    /*
        Caso de prueba: 
            - cantidad: 10 
            - precioProducto: 5.4  
            - descuento: 10
            - Descuento esperado: 5.4
        Si el caso de prueba es exitoso, hacer un commit
     */
    mostrarTexto("lblDescuento",valorDescuento);
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    // El IVA debe calcularse sobre el valor del subtotal menos el descuento
    valorIVA=calcularIva(valorSubtotal-valorDescuento);
    //9. Mostrar el resultado en el componente lblValorIVA    
        /*
            Caso de prueba: 
                - cantidad: 10 
                - precioProducto: 5.4  
                - descuento: 10

                    - valorSubtotal: 54
                    - descuento:5.4
                    - valorSubtotal 
                    - descuento: 48.6

                IVA esperado: 5.832

            Si el caso de prueba es exitoso, hacer un commit
        */
    mostrarTexto("lblIva",valorIVA);
            //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
            //11. Mostrar el resultado en el componente lblTotal
    /*
        Caso de prueba: 
            - cantidad: 10
            - precioProducto: 5.4 
            - descuento: 10

                --valorSubtotal: 5.4
                --descuento: 5.4
                --IVA: 5.832

                Total esperado: 54.432

                Si el caso de prueba es exitoso, hacer un commit
       */
      mostrarTexto("lblTotal",valorTotal);      
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    /*
        Ejemplo: 
            Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
        Si funciona, hacer un commit
    */
    mostrarTexto("lblResumen","valor a pagar por "+cantidad+" "+nombreProducto+" "+"con "+"% de desceunto: "+"USD "+valorTotal);
   
}else{
    mostrarTexto("lblPromedio","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblIva","0.0");
    mostrarTexto("lblTotal","0.0");
}}
limpiar = function () {
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
    mostrarTextoEnCaja("txtNota1","");
    mostrarTextoEnCaja("txtNota2","0");
    mostrarTextoEnCaja("txtNota3","0.0");
    mostrarTexto("lblPromedio","0.0");
    mostrarTexto("lblDescuento","0.0");
    mostrarTexto("lblIva","0.0");
    mostrarTexto("lblTotal","0.0");

}
/* SI TODO FUNCIONA, HACER UN PUSH */
calcularDescuentoPorVolumen=function(subtotal,cantidad){
let descuento;
let valorDescuento
if(cantidad<3){
    descuento=0;
} else if (cantidad>=3 && cantidad<=5 ){
    descuento=0.03;
}else if( cantidad>=6 && cantidad<=11){
    descuento=0.04;
}else if( cantidad>=12){
    descuento=0.05;
}

valorDescuento=descuento*subtotal;
return valorDescuento;
}
esProductoValido=function(nombre,idComponenteError){
    let hayErrores=false;
    if(nombre==""){
       
        if(nombre==""){
            mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
            hayErrores=true;
        }
        
    }
    if (nombre.length<0 || nombre.length>10){
        mostrarTexto(idComponenteError,"NO MAS DE 10 CARACTERES");
        hayErrores=true;
       } 
    if(hayErrores== false) {
        mostrarTexto(idComponenteError,"");
       }
    return !hayErrores;
    }

    esCantidadValida=function(cantidad,idComponenteError){
    let hayErrores=false;
    if(isNaN(cantidad)||cantidad==""){
        if(isNaN(cantidad)){
            mostrarTexto(idComponenteError,"DEBE INGRESAR UN NUMERO");
            hayErrores=true;}
        if(cantidad==""){
            mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
            hayErrores=true;
        }
        
    }
    if (cantidad<0 || cantidad>100){
    if (cantidad<0){
        mostrarTexto(idComponenteError,"INGRESE UN MINIMO DE 0");
        hayErrores=true;
       }
    if (cantidad>100){
        mostrarTexto(idComponenteError,"INGRESE UN MAXIMO DE 100");
        hayErrores=true;
       }

       } 
    if(hayErrores== false) {
        mostrarTexto(idComponenteError,"");
       }
    return !hayErrores;
    }
    esPrecioValida=function(precio,idComponenteError){
    let hayErrores=false;
    if(isNaN(precio)||precio==""){
        if(isNaN(precio)){
            mostrarTexto(idComponenteError,"DEBE INGRESAR UN NUMERO");
            hayErrores=true;}
        if(precio==""){
            mostrarTexto(idComponenteError,"CAMPO OBLIGATORIO");
            hayErrores=true;
        }
        
    }
    if (precio<0 || precio>50){
       /* mostrarTexto(idComponenteError,"NO PUEDE SUPERAR EL VALOR DE 50");
        hayErrores=true;*/
        if (precio<0){
        mostrarTexto(idComponenteError,"INGRESE UN MINIMO DE 0");
        hayErrores=true;
       }
    if (precio>50){
        mostrarTexto(idComponenteError,"INGRESE UN MAXIMO DE 50");
        hayErrores=true;
       }
       } 
    if(hayErrores== false) {
        mostrarTexto(idComponenteError,"");
       }
    return !hayErrores;
    }
    