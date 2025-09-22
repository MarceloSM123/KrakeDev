jugar=function(){ 
    let valorRecuperado= lanzarDado();
    cambiarTexto("lblNumero",valorRecuperado);
    if(valorRecuperado>3){
        cambiarTexto("lblMensaje","Es mayor a 3, GANASTE");
    }else{
        cambiarTexto("lblMensaje","Es menor a 3, ESTAS DE MALAS");
    }
}
// crear una funcion llamada lanzar dados
//no tiene parametros
// retorna un numero del 1 al 6

lanzarDado=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*6;
    let numeroEntero=parseInt(numeroMultiplicado);
    let valorDado=numeroEntero+1;
    return valorDado;
}

