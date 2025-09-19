Saludar=function(){
    // recuperar el valor de la caja de texto txtNombre
    let nombre=RecuperarTexto("txtNombre");
    // recuperar texto de la caja de texto txtApellido
    let apellido=RecuperarTexto("txtApellido");
}

RecuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
return valorIngresado
}