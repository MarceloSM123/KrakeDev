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
    mostrarImagen("imgSaludo","./imagen/giphy.gif");
    // vamos alimpiar la caja de texto
    mostrarTextoEnCaja("txtNombre", "");
}

