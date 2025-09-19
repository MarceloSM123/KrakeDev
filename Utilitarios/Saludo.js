Saludar=function(){
    // recuperar el valor de la caja de texto txtNombre
    let nombre=RecuperarTexto("txtNombre");
    // recuperar el valor de la caja de texto txtApellido
    let apellido=RecuperarTexto("txtApellido");
    /// recueprar el valor de la caja de texto txtEdad
    let edad=recuperarInt("txtEdad");
    // recuperar el valor de la caja de texto txtAltura
    let altura=recuperarFloat("txtEstatura");
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