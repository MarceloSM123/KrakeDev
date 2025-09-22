jugar=function(){   
    lanzarDado();
}
// crear una funcion llamada lanzar dados
//no tiene parametros
// retorna un numero del 1 al 6

lanzarDado=function(){
    let aleatorio=Math.random();
    let numeroMultiplicado=aleatorio*6;
    let numeroEntero=parseInt(numeroMultiplicado);
    let valorDado=numeroEntero+1;
    return valorDado
}