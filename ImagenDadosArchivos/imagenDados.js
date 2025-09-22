let puntos=0;
let intentos=5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLnzamientos();
   
}


modificarPuntos=function(numero){
    puntos=puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    // si el jugador obtiene mas de 20 puntos
    // generar el mensaje ganaste
    // invocar a limpiar
    if(puntos>20){
        cambiarTexto("lblMensaje","GANASTE");
        limpiar();
    }

}
// no recibe parametros
// resta 1 a la variable lanzamiento, guarda el resultado en la misma variable
// y muestra en pantalla
modificarLnzamientos=function(){
// si lanzamientos llega a cero mensaje game over
//invocar limpiar
intentos=intentos-1;
cambiarTexto("lblIntentos",intentos);
if(intentos==0 ){
    cambiarTexto("lblMensaje","GAME OVER");
        limpiar();
}
}

limpiar=function(){
    // colocar puntaje en 0 y lanzamiento en 5
    cambiarTexto("lblPuntos",0);
    cambiarTexto("lblIntentos",5);
    puntos=0;
    intentos=5;
    
}

// funcion mostrar dado, recibe el numero a mostrar
// muestra la imagen correspondiente a la imagen que recibe
// no retorna nada
mostrarCara=function(numero){
if(numero==1){
cambiarImagen("imgDados","dados1.png");
}else if(numero==2){
cambiarImagen("imgDados","dados2.png");
}else if(numero==3){
cambiarImagen("imgDados","dados3.png");
}else if(numero==4){
cambiarImagen("imgDados","dados4.png");
}else if(numero==5){
cambiarImagen("imgDados","dados5.png");
}else if(numero==6){
cambiarImagen("imgDados","dados6.png");
}
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}