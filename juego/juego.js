let puntosUsuario=0;
let puntosComputador=0;
jugar=function(seleccionado){
    let elemento;
    let imagen;
    let ganador;
    elemento=generarElemento();
    imagen=generarRuta(elemento);
    mostrarImagen("imgComputador",imagen);
    ganador=determinarGanador(seleccionado,elemento);
    if(ganador==0){
        console.log("EMPATE");
        mostrarTexto("lblResultado","EMPATE");

    }
    if(ganador==1){
        console.log("GANASTE LA PARTIDA");
        mostrarTexto("lblResultado","GANASTE LA PARTIDA!!");
        puntosUsuario=puntosUsuario+1;
        mostrarTexto("lblJugador","PUNTOS USUARIO: "+puntosUsuario);
    }
    if(ganador==2){
        console.log("PERDISTE LA PARTIDA");
        mostrarTexto("lblResultado","PERDISTE LA PARTIDA!!");
        puntosComputador=puntosComputador+1;
       mostrarTexto("lblComputador","PUNTOS COMPUTADOR: "+puntosComputador);
    }

    if(puntosUsuario==5 || puntosComputador==5 || puntosUsuario>=5 || puntosComputador>=5){
        if(puntosUsuario==5 || puntosUsuario>=5 ){
            mostrarTexto("lblResultado","HAS GANADO EL JUEGO!");
            mostrarTexto("lblComputador","PUNTOS COMPUTADOR: ");
            mostrarTexto("lblJugador","PUNTOS USUARIO: ");
            puntosComputador=0;
        }
        if(puntosComputador==5 || puntosComputador>=5 ){
            mostrarTexto("lblResultado","EL COMPUTADOR TE HA VENCIDO");
            mostrarTexto("lblComputador","PUNTOS COMPUTADOR: ");
            mostrarTexto("lblJugador","PUNTOS USUARIO: ");
            puntosUsuario=0;
        }
    }
    /*else{
        if(puntosUsuario>5 || puntosComputador>5){
            mostrarTexto("lblResultado","");
            mostrarTexto("lblComputador","PUNTOS COMPUTADOR: ");
            mostrarTexto("lblJugador","PUNTOS USUARIO: ");
        }
    }*/
} 

limpiar=function(){
    mostrarTexto("lblResultado","");
    mostrarTexto("lblComputador","PUNTOS COMPUTADOR: 0");
    mostrarTexto("lblJugador","PUNTOS USUARIO: 0");
    puntosUsuario=0;
    puntosComputador=0;
}