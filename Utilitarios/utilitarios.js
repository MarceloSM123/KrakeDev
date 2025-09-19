recuperarInt=function(idcomponente){
    let valorCaja=RecuperarTexto(idcomponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function(idcomponente){
    let valorCaja=RecuperarTexto(idcomponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}

RecuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
return valorIngresado
}

mostrarTexto=function(idComponente, mensaje){
let componente;
componente=document.getElementById(idComponente);
componente.innerText=mensaje;
}

mostrarImagen=function(idComponente, rutaImagen){
    let componente =document.getElementById(idComponente);
    componente.src=rutaImagen;
}

mostrarTextoEnCaja=function(idComponente, mensaje){
let componente;
componente=document.getElementById(idComponente);
componente.value=mensaje;
}