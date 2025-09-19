Saludar=function(){
    // recuperar el valor de la caja de texto txtNombre
    let nombre=RecuperarTexto("txtNombre");
    // recuperar el valor de la caja de texto txtApellido
    let apellido=RecuperarTexto("txtApellido");
    /// recueprar el valor de la caja de texto txtEdad
    let edad=recuperarInt("txtEdad");
    // recuperar el valor de la caja de texto txtAltura
    let altura=recuperarFloat("txtEstatura");
    let mensajeBienvenido= "Bienvenido "+nombre+" "+apellido;
    mostrarTexto("lblResultado", mensajeBienvenido);
    mostrarImagen("imgSaludo","./imagen/giphy.gif")
}

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