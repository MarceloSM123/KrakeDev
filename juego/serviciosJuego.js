obtenerAleatorio=function(){
    let aleatorio;
    let numero;
    aleatorio=Math.random();
    numero=parseInt((aleatorio*3))+1;
    return numero;
}

generarElemento=function(){
    let resultado;
    if(obtenerAleatorio()==1){
       return resultado="piedra";
    }
    if(obtenerAleatorio()==2){
       return resultado="papel";
    }
    if(obtenerAleatorio()==3){
       return resultado="tijera";
    }
}

determinarGanador=function(eleccionJugador1,eleccionJugador2){
    let resultado;
    if(eleccionJugador1==eleccionJugador2){
        return resultado="Empate";
    }
    if((eleccionJugador1=="papel" && eleccionJugador2=="tijera" )||(eleccionJugador2=="papel" && eleccionJugador1=="tijera" )){
        if(eleccionJugador1=="papel" && eleccionJugador2=="tijera" ){
            return 2;
        }
        if(eleccionJugador2=="papel" && eleccionJugador1=="tijera" ){
            return 1;
        }
    }
    if((eleccionJugador1=="papel" && eleccionJugador2=="piedra" )||(eleccionJugador2=="papel" && eleccionJugador1=="piedra" )){
        if(eleccionJugador1=="papel" && eleccionJugador2=="piedra" ){
            return 1;
        }
        if(eleccionJugador2=="papel" && eleccionJugador1=="piedra" ){
            return 2;
        }
    }
    if((eleccionJugador1=="tijera" && eleccionJugador2=="piedra" )||(eleccionJugador2=="tijera" && eleccionJugador1=="piedra" )){
        if(eleccionJugador1=="tijera" && eleccionJugador2=="piedra" ){
            return 2;
        }
        if(eleccionJugador2=="tijera" && eleccionJugador1=="piedra" ){
            return 1;
        }
    }
}

generarRuta=function(nombre){
return "./imagenes/"+nombre+".png"
}